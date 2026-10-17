import re
import urllib.request
import os

os.makedirs('d:/portofolio-othmar/public/assets/figma', exist_ok=True)

steps = [863, 867, 916, 922]
urls = set()

for s in steps:
    path = f'C:/Users/othma/.gemini/antigravity-ide/brain/b691a4e3-504a-44ca-951b-3d0bfa33fa4b/.system_generated/steps/{s}/output.txt'
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            text = f.read()
            found = re.findall(r'http://localhost:3845/assets/[a-zA-Z0-9_\-\.]+', text)
            urls.update(found)

# Also add the frame 32, 25, 26, 31, 51:299, 51:294 assets
extra_urls = [
    "http://localhost:3845/assets/48e4bdaba5a4509861abf2bdd0d63d8765dc05e4.png",
    "http://localhost:3845/assets/acd25c0cd53e59db9786ee91b3e81a4415464106.png",
    "http://localhost:3845/assets/03ec5ae08201a899ebbc886f12c5c001371c003b.svg",
    "http://localhost:3845/assets/b8c39abc79587ace90f99d8f002006044d0a6ac7.png",
    "http://localhost:3845/assets/223ec3219556656b41f9986b205734b704330a58.png",
    "http://localhost:3845/assets/9addeb4e13a47d1d3f9b762cecf409516685b9e1.png",
    "http://localhost:3845/assets/a2020f32b30b60ea0cd48eed0144ef6d6bb0868f.png",
    "http://localhost:3845/assets/0720297efb3dc3d1df3ed808a9489c003d47105d.png",
    "http://localhost:3845/assets/d8cb0018f2663d32b04ba204639d4a930a9cc9a6.png",
    "http://localhost:3845/assets/7f3592c28d97e8103ce0e00e6c74237d4348de6c.svg",
    "http://localhost:3845/assets/dbff240efecab28dd22475ac47308ba3347cbf55.svg",
    "http://localhost:3845/assets/4e6c8786ee90886f385913d0eff723a7365e11f8.svg",
    "http://localhost:3845/assets/86c575572bad19aa6c6c2493b6dff57c80331de2.svg",
    "http://localhost:3845/assets/0c2758894b469f8c603e78060ee4a45e451cb0fd.svg",
    "http://localhost:3845/assets/dc1f25b1ca5028e9551c5a11fc58f1b2fe487ab5.png",
    "http://localhost:3845/assets/f13d290a29579d7d0f26c057eb813be5e8b6b62d.png"
]
urls.update(extra_urls)

print(f"Total assets to download: {len(urls)}")
for u in urls:
    filename = os.path.basename(u)
    dest = os.path.join('d:/portofolio-othmar/public/assets/figma', filename)
    if not os.path.exists(dest):
        try:
            urllib.request.urlretrieve(u, dest)
            print(f"Downloaded: {filename}")
        except Exception as e:
            print(f"Failed {filename}: {e}")
    else:
        print(f"Already exists: {filename}")
