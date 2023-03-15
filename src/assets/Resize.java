import java.io.File;
import java.io.IOException;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.awt.Graphics2D;

public class Resize {

	public static void main(String[] args) {
		System.out.println("---------------------");
		// System.out.println(" 'hi'");

		String path = "/Users/Surface/Desktop/image-test/";

		File folder = new File(path);
		File[] listOfFiles = folder.listFiles();

		// scaleImage(null, 3900, 3900);

		for (int i = 0; i < listOfFiles.length; i++) {

			String name = listOfFiles[i].getName();

			System.out.print("(" + (int) ((i + 1.0) * 100 / listOfFiles.length) + "%) found: " + name);

			if (listOfFiles[i].isFile() && name.contains(".jpg")) {
				System.out.print(", starting");

				BufferedImage image = null;
				try {
					image = ImageIO.read(new File(path + name));
				} catch (Exception e) {
					System.out.println("--");
					e.printStackTrace();
					System.out.println("--");
				}

				String newName = name.replace("-", "-scaled-");

				try {
					ImageIO.write(scaleImage(image), "JPG", new File(path + newName));
				} catch (Exception e) {
					System.out.println("--");
					e.printStackTrace();
					System.out.println("--");
				}
			}
			System.out.println(", finished.");

		}
		System.out.println("---------------------");
	}

	static BufferedImage scaleImage(BufferedImage image) {
		int width = image.getWidth(), height = image.getHeight();
		if (width > 1920 || height > 1920) {
			if (width >= height) { // wide
				height = (int) Math.round(height * 1920.0 / width);
				width = 1920;
			} else { // portrait
				width = (int) Math.round(width * 1920.0 / height);
				height = 1920;
			}
		}

		try {

			return resizeImage(image, width, height);
		} catch (Exception e) {
			System.out.println("null mabe?");
			e.printStackTrace();

		}
		return null;
	}

	static BufferedImage resizeImage(BufferedImage originalImage, int targetWidth, int targetHeight)
			throws IOException {
		BufferedImage resizedImage = new BufferedImage(targetWidth, targetHeight, BufferedImage.TYPE_INT_RGB);
		Graphics2D graphics2D = resizedImage.createGraphics();
		graphics2D.drawImage(originalImage, 0, 0, targetWidth, targetHeight, null);
		graphics2D.dispose();
		return resizedImage;
	}
}
