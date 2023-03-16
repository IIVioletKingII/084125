import java.io.File;
import java.io.IOException;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.awt.Graphics2D;

public class Resize {

	enum Res {
		UHD(3840, 2160),
		P1080(1920, 1080),
		P720(1280, 720),
		P480(720, 480),
		P240(480, 720);

		Res(int w, int h) {
			width = w;
			height = h;
		}

		int width;
		int height;
	}

	public static void main(String[] args) {
		System.out.println("---------------------");
		String path = "";

		try {
			path = new File(".").getCanonicalPath() + "\\src\\assets\\";
		} catch (Exception e) {
			e.printStackTrace();
		}

		File folder = new File(path);
		File[] listOfFiles = folder.listFiles();

		String[] fileNames = new String[listOfFiles.length];

		for (int i = 0; i < listOfFiles.length; i++)
			fileNames[i] = listOfFiles[i].getName();

		for (int i = 0; i < listOfFiles.length; i++) {

			String name = listOfFiles[i].getName();

			System.out.print("(" + (int) ((i + 1.0) * 100 / listOfFiles.length) + "%) found: " + name);

			boolean replace = false;
			replace = replace ? !has(fileNames, name.replace("-", "-scaled-")) : true;

			if (listOfFiles[i].isFile() && name.contains(".jpg")
					&& !name.contains("scaled") && replace && name.contains("sam-68")) {
				System.out.print(", starting");

				BufferedImage image = null;

				try {
					image = ImageIO.read(new File(path + name));
				} catch (Exception e) {
					System.out.println("-read-");
					e.printStackTrace();
					System.out.println("--");
				}

				String newName = name.replace("-", "-scaled-");
				newName = "cover.jpg";

				try {
					ImageIO.write(scaleImage(image, 2560), "JPG", new File(path + newName));
				} catch (Exception e) {
					System.out.println("-write-");
					e.printStackTrace();
					System.out.println("--");
				}
			} else {
				System.out.print(", not necessary");
			}
			System.out.println(", finished.");

		}
		System.out.println("---------------------");
	}

	static boolean has(String[] arr, String input) {
		for (String string : arr)
			if (string.equals(input))
				return true;
		return false;
	}

	static BufferedImage scaleImage(BufferedImage image) {
		return scaleImage(image, Res.P1080);
	}

	static BufferedImage scaleImage(BufferedImage image, Res prefferedRes) {
		return scaleImage(image, prefferedRes.width);
	}

	static BufferedImage scaleImage(BufferedImage image, double max) {
		int width = image.getWidth(), height = image.getHeight();
		// double max = prefferedRes.width;
		if (width > max || height > max) {
			if (width >= height) { // wide
				height = (int) Math.round(height * max / width);
				width = (int) max;
			} else { // portrait
				width = (int) Math.round(width * max / height);
				height = (int) max;
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
