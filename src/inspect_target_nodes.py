with open('C:/Users/othma/.gemini/antigravity-ide/brain/b691a4e3-504a-44ca-951b-3d0bfa33fa4b/.system_generated/steps/783/output.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find node 40:172 and 5:132 and 5:135 and 50:286 in text
for target in ['40:172', '5:132', '5:135', '50:286', '23:2', '45:93']:
    idx = text.find(f'id="{target}"')
    if idx != -1:
        start = max(0, idx - 100)
        end = min(len(text), idx + 200)
        print(f"Target {target}:\n{text[start:end]}\n")
