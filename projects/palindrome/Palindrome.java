package com.turkcell.Odevler;

import java.util.Scanner;

public class Palindrome {
	
	public static int count = 0;
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		for (;;) {
			
			System.out.print("Girdi: ");
			String string = scan.next();
			
			if (string.equals("exit")) {
				scan.close();
				break;
			}
			
			String tamamlayiciSayi = palindromeTamamlayiciSayi(string);
			System.out.println(tamamlayiciSayi + "\n");
			
		}
		
	}
	
	public static String palindromeTamamlayiciSayi(String sayi) {
		String reverse = "";
		int number = 0, palindromeNumber = 0;
		
		try {
			number = Integer.parseInt(sayi);
			palindromeNumber = number;
			
			while (true) {
				for (int i = sayi.length() - 1; i >= 0; i--)
					reverse += sayi.charAt(i);
				
				if (Integer.parseInt(sayi) != Integer.parseInt(reverse)) {
					count++;
					palindromeNumber++;
					reverse = "";
					sayi = String.valueOf(palindromeNumber);
				} else {
					System.out.println(number + " + " + count + " = " + palindromeNumber);
					break;
				}
			}
			
			return String.valueOf(count); // sayı girildiyse
			
		} catch (NumberFormatException e) {
			return "Sayi girilmedi";
		}
		
	}
}
