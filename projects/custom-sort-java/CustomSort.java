package com.turkcell.Odevler;

import java.util.Arrays;
import java.util.Scanner;

public class CustomSort {
	private static char[] alphabets = { 'd', 'e', 'f', 'g', 'a', 'u', 'ğ', 'ı', 'v', 'i', 'j', 'ç', 'k', 'l', 'ü', 'm',
			'n', 'o', 'c', 'ö', 'p', 'r', 's', 'y', 'h', 'b', 'ş', 't', 'z' };
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		System.out.print("Kac kelime girecekseniz: ");
		int countWords = scan.nextInt();
		
		String[] sort = new String[countWords]; // sort array'i oluşturma
		String[] words = new String[countWords]; // kelime array'i oluşturma
		
		for (int z = 1; z <= countWords; z++) {
			System.out.print(z + ". Kelime: ");
			words[z - 1] = scan.next().toLowerCase();
		}
		
		System.out.println("----------------");
		
		int count = 0; // sort array için sayaç
		String charactersNum = ""; // karakterlerin alphabets array'ine göre indexlerinin sayı olarak yazımı
		
		for (int a = 0; a < words.length; a++) { // kelimeleri dolaşma
			
			charactersNum = "";
			
			for (int b = 0; b < words[a].length(); b++) { // kelimelerin harflerini dolaşma
				
				for (int c = 0; c < alphabets.length; c++) { // alfabeyi dolaşma
					
					if (alphabets[c] == (words[a].charAt(b))) { // alfabe array'inde karakterin indexini bulma
						
						if (c < 10) // index 10'dan küçükse çift haneli yazımı
							charactersNum += "0" + c + " ";
						else
							charactersNum += c + " ";
					}
				}
			}
			
			// sort array'ine karakterlerin index sayıları ile kelimenin eklenmesi
			sort[count] = charactersNum + " " + words[a];
			count++;
		}
		
		Arrays.sort(sort); // küçükten büyüğe doğru sıralama
		boolean bool = true;
		
		for (int x = 0; x < sort.length; x++) { // sort array'inin kelimelerini yazdırma
			sort[x] = sort[x].replaceAll("\\s", "");
			sort[x] = sort[x].replaceAll("[0-9]", "");
			System.out.println((x + 1) + ". kelime " + sort[x]);
		}
		
		for (int y = 0; y < words.length; y++) { // kelime array'i ile sort array'i eşit mi değil mi
			if (words[y].equals(sort[y])) {
				bool = true; // eşit
			} else {
				bool = false; // eşit değil
				break;
			}
		}
		
		// kelime array'i sıralı girilip girilmemesi
		if (bool)
			System.out.println("\nGirilen kelimeler sirali");
		else
			System.out.println("\nGirilen kelimeler sirali degil");
	}
}