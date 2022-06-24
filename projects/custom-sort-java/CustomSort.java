package com.turkcell.Odevler;

import java.util.Arrays;
import java.util.Scanner;

public class CustomSort {
	private static char[] alphabet = { 'd', 'e', 'f', 'g', 'a', 'u', 'ğ', 'ı', 'v', 'i', 'j', 'ç', 'k', 'l', 'ü', 'm',
			'n', 'o', 'c', 'ö', 'p', 'r', 's', 'y', 'h', 'b', 'ş', 't', 'z' };
	
	public static void main(String[] args) {
		
		// kelimelerin girilmesi
		String[] wordsArray = enterWords();
		
		// kelimelerin alfabe array'ine göre indexleriyle birlikte yazılması
		String[] indexAndWordArray = indexAndWord(wordsArray);
		
		// kelimelerin alfabeye göre sıralanması ve gösterilmesi
		sortAndShowWords(indexAndWordArray);
		
		// girilen kelimeler alfabeye göre sıralı girilip girilmediği
		boolean check = checkArrays(wordsArray, indexAndWordArray);
		
		if (check)
			System.out.println("\nGirilen kelimeler alfabeye gore sirali girilmis");
		else
			System.out.println("\nGirilen kelimeler alfabeye gore sirali girilmemis");
		
	} // main
	
	// kelimelerin girilmesi ve array içine alınması
	public static String[] enterWords() {
		Scanner scan = new Scanner(System.in);
		System.out.print("Kac kelime girecekseniz: ");
		int countWords = scan.nextInt();
		
		String[] words = new String[countWords]; // kelime array'i oluşturma
		
		for (int i = 1; i <= countWords; i++) {
			System.out.print(i + ". Kelime: ");
			words[i - 1] = scan.next().toLowerCase();
		}
		
		System.out.println("\n----------------\n");
		
		return words;
		
	} // enterWords
	
	// kelimelerin karakterlerinin alfabe array'ine göre index'leriyle array
	// oluşturulması
	public static String[] indexAndWord(String[] words) {
		
		String characterIndex = ""; // karakterlerin alfabe array'ine göre indexlerinin string olarak yazımı
		String[] indexAndWordArray = new String[words.length]; // index ve kelime array'i oluşturulması
		
		for (int a = 0; a < words.length; a++) { // kelimeleri dolaşma
			
			characterIndex = "";
			
			for (int b = 0; b < words[a].length(); b++) { // kelimelerin harflerini dolaşma
				
				for (int c = 0; c < alphabet.length; c++) { // alfabeyi dolaşma
					
					if (alphabet[c] == (words[a].charAt(b))) { // alfabe array'inde karakterin indexini bulma
						
						if (c < 10) // index 10'dan küçükse çift haneli yazımı
							characterIndex += "0" + c + " ";
						else
							characterIndex += c + " ";
						
					} // alfabe array'inde index bulma
				} // alfabeyi dolaşma
			} // keliemelerin harflerini dolaşma
			
			// indexAndWordArray array'ine karakterlerin index sayıları ile kelimenin
			// eklenmesi
			indexAndWordArray[a] = characterIndex + " " + words[a];
			
		} // kelimeleri dolaşma
		
		return indexAndWordArray;
		
	} // indexAndWord
	
	// kelimelerin sıralanması ve gösterilmesi
	public static void sortAndShowWords(String[] words) {
		
		Arrays.sort(words); // indexlere göre küçükten büyüğe doğru sıralama
		
		for (int i = 0; i < words.length; i++) { // sort array'inin kelimelerini yazdırma
			words[i] = words[i].replaceAll("\\s", ""); // boşlukları silme
			words[i] = words[i].replaceAll("[0-9]", ""); // sayıları silme
			System.out.println((i + 1) + ". kelime: " + words[i]); // keliemeleri yazdırma
		}
		
	} // sortAndShowWords
	
	// girilen keliemelerin alfabeye göre sıralı girilip girilmediği
	public static boolean checkArrays(String[] words, String[] sortWords) {
		
		for (int i = 0; i < words.length; i++) {
			if (!words[i].equals(sortWords[i])) // words array'i ile sortWords array'i eşit mi değil mi
				return false; // eşit değil
		}
		
		return true; // eşit
	} // checkArrays
	
} // class