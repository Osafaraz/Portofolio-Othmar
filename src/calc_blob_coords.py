import xml.etree.ElementTree as ET

with open('C:/Users/othma/.gemini/antigravity-ide/brain/b691a4e3-504a-44ca-951b-3d0bfa33fa4b/.system_generated/steps/783/output.txt', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('<')
last_idx = text.rfind('</frame>') + len('</frame>')
root = ET.fromstring(text[idx:last_idx])

# In Figma root (5:2), its x="-1742", y="0", w="1440", h="8210"
# All coordinates of direct children of 5:2 are relative to (0, 0) of 5:2 canvas.
# For nested children, we accumulate x and y.

blob_ids = {
    '5:132': 'Hero Left Blue',
    '5:135': 'Hero Right Orange',
    '40:172': 'PCR Cup Right Orange',
    '51:356': 'PCR Gallery Left Blue',
    '51:355': 'JTI Expo Right Blue',
    '46:69': '4C Center-Left Orange',
    '51:357': '4C ARVANA Right Blue',
    '51:358': 'Personal Works Left Blue',
    '51:316': 'Personal Works Right Orange',
    '85:67': 'Thanks Right Blue',
    '85:68': 'Thanks Left Orange',
}

def find_nodes(node, cur_x=0, cur_y=0):
    nid = node.attrib.get('id')
    nx = float(node.attrib.get('x', 0))
    ny = float(node.attrib.get('y', 0))
    nw = float(node.attrib.get('width', 0))
    nh = float(node.attrib.get('height', 0))
    
    # If this is node 5:2 itself, cur_x and cur_y are 0
    if nid == '5:2':
        pos_x = 0
        pos_y = 0
    else:
        pos_x = cur_x + nx
        pos_y = cur_y + ny
        
    if nid in blob_ids:
        print(f"{nid:8} | {blob_ids[nid]:25} | canvas_x={pos_x:7.1f} | canvas_y={pos_y:7.1f} | w={nw:7.1f} | h={nh:7.1f}")
        
    for child in node:
        find_nodes(child, pos_x, pos_y)

find_nodes(root, 0, 0)
