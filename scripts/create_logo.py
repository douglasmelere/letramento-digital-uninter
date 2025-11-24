from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 640, 240
OUTPUT = Path("public/uninter-logo.png")


def build_logo() -> None:
    base = Image.new("RGB", (WIDTH, HEIGHT), "#001f3f")
    draw = ImageDraw.Draw(base)

    for y in range(HEIGHT):
        ratio = y / HEIGHT
        color = (
            int(0 + ratio * 20),
            int(31 + ratio * 90),
            int(63 + ratio * 120),
        )
        draw.line([(0, y), (WIDTH, y)], fill=color)

    center = (130, 120)
    draw.ellipse(
        (center[0] - 60, center[1] - 60, center[0] + 60, center[1] + 60),
        outline="#f5c542",
        width=6,
    )
    draw.ellipse(
        (center[0] - 30, center[1] - 90, center[0] + 30, center[1] + 90),
        outline="#f5c542",
        width=4,
    )
    draw.line((center[0], center[1] - 90, center[0], center[1] + 90), fill="#f5c542", width=3)
    draw.line((center[0] - 90, center[1], center[0] + 90, center[1]), fill="#f5c542", width=3)

    try:
        font_main = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 72)
        font_sub = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 26)
    except OSError:
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()

    draw.text((220, 80), "UNINTER", font=font_main, fill="white")
    draw.text(
        (220, 150),
        "Centro Universitário Internacional",
        font=font_sub,
        fill="#d1e8ff",
    )

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    base.save(OUTPUT)


if __name__ == "__main__":
    build_logo()

