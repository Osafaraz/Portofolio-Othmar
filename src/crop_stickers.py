from PIL import Image

im = Image.open('C:/Users/othma/.gemini/antigravity-ide/brain/b691a4e3-504a-44ca-951b-3d0bfa33fa4b/.user_uploaded/media_1792135398439.png')
w, h = im.size

# Name tag crop approx:
# x: 340 to 485, y: 360 to 480
crop_nametag = im.crop((335, 360, 485, 480))
crop_nametag.save('d:/portofolio-othmar/public/assets/figma/sticker_name_tag.png')

# Green 05' Kid crop approx:
# x: 545 to 625, y: 445 to 550
crop_green = im.crop((545, 445, 625, 550))
crop_green.save('d:/portofolio-othmar/public/assets/figma/sticker_green_kid.png')

print("Cropped successfully!")
