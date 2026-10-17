import os

with open('public/assets/stickers/pw-always-circle.svg', 'r', encoding='utf-8') as f:
    c_circle = f.read()
with open('public/assets/stickers/pw-always-text.svg', 'r', encoding='utf-8') as f:
    c_text = f.read()
with open('public/assets/stickers/pw-always-star.svg', 'r', encoding='utf-8') as f:
    c_star = f.read()

def get_inner(s):
    start = s.find('>') + 1
    end = s.rfind('</svg>')
    return s[start:end]

inner_circle = get_inner(c_circle)
inner_text = get_inner(c_text)
inner_star = get_inner(c_star)

badge_always = f"""<svg width="95" height="88" viewBox="0 0 95 88" fill="none" xmlns="http://www.w3.org/2000/svg">
{inner_circle}
<g transform="translate(23.8, 18)">
{inner_text}
</g>
<g transform="translate(39.8, 59)">
{inner_star}
</g>
</svg>"""

with open('public/assets/stickers/badge-always-complete.svg', 'w', encoding='utf-8') as f:
    f.write(badge_always)
print('badge-always-complete.svg created successfully')

# Now for smile badge:
with open('public/assets/stickers/pw-smile-circle.svg', 'r', encoding='utf-8') as f:
    c_smile_circle = f.read()
with open('public/assets/stickers/pw-smile-face.svg', 'r', encoding='utf-8') as f:
    c_smile_face = f.read()

inner_smile_circle = get_inner(c_smile_circle)
inner_smile_face = get_inner(c_smile_face)

# Circle is 72 x 67.9884, face is 41.9032 x 41.9032
# Offset: (72 - 41.9032) / 2 = 15.048, (68 - 41.9032) / 2 = 13.048
badge_smile = f"""<svg width="72" height="68" viewBox="0 0 72 68" fill="none" xmlns="http://www.w3.org/2000/svg">
{inner_smile_circle}
<g transform="translate(15.05, 13.05)">
{inner_smile_face}
</g>
</svg>"""

with open('public/assets/stickers/badge-smile-complete.svg', 'w', encoding='utf-8') as f:
    f.write(badge_smile)
print('badge-smile-complete.svg created successfully')
