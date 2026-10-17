import xml.etree.ElementTree as ET

with open('C:/Users/othma/.gemini/antigravity-ide/brain/b691a4e3-504a-44ca-951b-3d0bfa33fa4b/.system_generated/steps/783/output.txt', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('<')
last_idx = text.rfind('</frame>') + len('</frame>')
root = ET.fromstring(text[idx:last_idx])

# Search for all elements with 'Ellipse' or large vectors
figma_origin_x = -1742.0
figma_origin_y = 0.0

def find_all(node, parent_x=0, parent_y=0):
    cur_x = parent_x + float(node.attrib.get('x', 0))
    cur_y = parent_y + float(node.attrib.get('y', 0))
    w = float(node.attrib.get('width', 0))
    h = float(node.attrib.get('height', 0))
    name = node.attrib.get('name', '')
    nid = node.attrib.get('id', '')
    
    rel_x = cur_x - figma_origin_x
    rel_y = cur_y - figma_origin_y
    
    if ('Ellipse' in name or 'Vector' in name or 'Rectangle' in name) and w > 100:
        print(f"ID={nid:8} | Name={name:25} | rel_x={rel_x:7.1f} | rel_y={rel_y:7.1f} | w={w:7.1f} | h={h:7.1f}")
        
    for child in node:
        find_all(child, cur_x, cur_y)

find_all(root, 0, 0)

