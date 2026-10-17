import xml.etree.ElementTree as ET

with open('C:/Users/othma/.gemini/antigravity-ide/brain/b691a4e3-504a-44ca-951b-3d0bfa33fa4b/.system_generated/steps/783/output.txt', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('<')
last_idx = text.rfind('</frame>') + len('</frame>')
root = ET.fromstring(text[idx:last_idx])

for nid in ['5:132', '5:135', '40:172', '51:356', '51:355', '46:69', '51:357', '51:358', '51:316', '85:67', '85:68']:
    elem = root.find(f".//*[@id='{nid}']")
    if elem is not None:
        print(f"ID {nid:8}: attrib = {elem.attrib}")
