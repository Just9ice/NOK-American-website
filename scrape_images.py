import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin, urlparse

# URL list based on our sitemap
urls = [
    'https://nokinc.com/',
    'https://nokinc.com/services/',
    'https://nokinc.com/financing/',
    'https://nokinc.com/contact/',
    'https://nokinc.com/about-us/',
    'https://nokinc.com/product/',
    'https://nokinc.com/product/software-solutions/',
    'https://nokinc.com/product/battery-inverter-systems/',
    'https://nokinc.com/product/solar-power-systems/',
    'https://nokinc.com/product/electric-tricycles/',
    'https://nokinc.com/product/ev-lfp-chargers/',
    'https://nokinc.com/product/solar-security-lights/',
    'https://nokinc.com/product/industrial-agricultural-equipment/',
    'https://nokinc.com/product/solar-powered-cooling/'
]

assets_dir = r"c:\codebase\nok-inc\public\images"
os.makedirs(assets_dir, exist_ok=True)

downloaded = set()

def download_image(url):
    if url in downloaded:
        return
    
    # We only care about images from nokinc.com or reasonable sources, but let's try to get them all.
    parsed = urlparse(url)
    filename = os.path.basename(parsed.path)
    
    # Simple check to skip svgs or strange urls without extensions
    if not filename or '.' not in filename[-5:]:
        return
        
    try:
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            filepath = os.path.join(assets_dir, filename)
            with open(filepath, 'wb') as f:
                f.write(r.content)
            downloaded.add(url)
            print(f"Downloaded: {filename}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

for url in urls:
    print(f"Scraping {url} for images...")
    try:
        r = requests.get(url, timeout=10)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        # Find all images
        for img in soup.find_all('img'):
            src = img.get('src')
            if not src:
                continue
                
            # If src is relative, make it absolute
            abs_url = urljoin(url, src)
            download_image(abs_url)
            
            # Also check srcset for higher res versions
            srcset = img.get('srcset')
            if srcset:
                # Naive parse of srcset: get the largest one
                parts = srcset.split(',')
                largest = parts[-1].strip().split(' ')[0]
                abs_url_largest = urljoin(url, largest)
                download_image(abs_url_largest)
                
    except Exception as e:
        print(f"Failed to scrape {url}: {e}")

print("Done extracting assets.")
