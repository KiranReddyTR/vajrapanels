from PIL import Image, ImageChops

def crop_and_transparent(input_path, output_path):
    # Load the official logo
    img = Image.open(input_path).convert("RGBA")
    
    # Get the bounding box of non-white pixels
    # We assume the background is pure white (255, 255, 255)
    bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
    diff = ImageChops.difference(img, bg)
    diff = diff.convert("RGB")
    bbox = diff.getbbox()
    
    if bbox:
        # Crop to the text exactly
        img = img.crop(bbox)
        
        # Make white background transparent
        datas = img.getdata()
        newData = []
        for item in datas:
            # If pixel is very close to white, make it transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path} to {output_path}")
    else:
        print("Could not find logo bounding box.")

if __name__ == "__main__":
    crop_and_transparent("C:/Users/kiran/official-logo.jpeg", "c:/Users/kiran/Downloads/vajrapanels-main (2)/vajrapanels-main/public/images/vajra-panels-logo.png")
