import xml.etree.ElementTree as ET

with open('C:/Users/othma/.gemini/antigravity-ide/brain/b691a4e3-504a-44ca-951b-3d0bfa33fa4b/.system_generated/steps/783/output.txt', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('<')
last_idx = text.rfind('</frame>') + len('</frame>')
xml_content = text[idx:last_idx]
root = ET.fromstring(xml_content)
print(f"Root: {root.tag}, attrib: {root.attrib}")
def print_node(node, depth=0):
    indent = "  " * depth
    nid = node.attrib.get('id', '')
    name = node.attrib.get('name', '')
    x = float(node.attrib.get('x', 0))
    y = float(node.attrib.get('y', 0))
    w = float(node.attrib.get('width', 0))
    h = float(node.attrib.get('height', 0))
    print(f"{indent}{node.tag:12} id={nid:10} name={name:30} x={x:8.1f} y={y:8.1f} w={w:8.1f} h={h:8.1f}")
    if depth < 2:
        for child in node:
            print_node(child, depth + 1)

for child in root:
    if child.attrib.get('name') in ['Hero Cover', 'About Me', 'Works', 'Thanks']:
        print(f"\n--- Section: {child.attrib.get('name')} ---")
        print_node(child, 0)

