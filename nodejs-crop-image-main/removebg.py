import cv2
import rembg
import sys
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor


in_dir = Path("D:\\FiveM\\clothes_images\\1_female_glasses\\cropped")
out_dir = Path("D:\\FiveM\\clothes_images\\1_female_glasses\\transparent")


def is_image(absolute_path: Path):
    return absolute_path.is_file and str(absolute_path).endswith('.jpg')


input_filenames = [p for p in filter(is_image, Path(in_dir).iterdir())]


def process_image(in_dir):
    try:
        image = cv2.imread(str(in_dir))
        if image is None or not image.data:
            raise cv2.error("read failed")
        output = rembg.remove(image)
        in_dir = out_dir / in_dir.with_suffix(".png").name
        cv2.imwrite(str(in_dir), output)
        print(f'Processed: {in_dir.with_suffix(".png").name}')
    except Exception as e:
        print(f"{in_dir}: {e}", file=sys.stderr)


executor = ThreadPoolExecutor(max_workers=24)


for result in executor.map(process_image, input_filenames):
    print(f"")