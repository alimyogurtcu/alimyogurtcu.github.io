package com.turkcell.Odevler;

import java.util.Arrays;
import java.util.Scanner;

public class CustomSort {
	private static char[] alphabet = { 'd', 'e', 'f', 'g', 'a', 'u', 'ğ', 'ı', 'v', 'i', 'j', 'ç', 'k', 'l', 'ü', 'm',
			'n', 'o', 'c', 'ö', 'p', 'r', 's', 'y', 'h', 'b', 'ş', 't', 'z' };
	
	public static void main(String[] args) {
		
		String[] words = enterWords(); // kelimelerin girilmesi
		String[] sortWords = sortWords(words); // kelimelerin sıralanması
		
		showSortWords(sortWords); // kelimelerin alfabeye göre sıralanmış şekilde gösterilmesi
		
		boolean check = checkArrays(words, sortWords); // girilen kelimeler alfabeye göre sıralı girilip girilmediği
		
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
	public static String[] sortWords(String[] words) {
		
		String characterIndex = ""; // karakterlerin alfabe array'ine göre indexlerinin string olarak yazımı
		
		String[] sort = new String[words.length]; // sort array'i oluşturma
		
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
			
			// sort array'ine karakterlerin index sayıları ile kelimenin eklenmesi
			sort[a] = characterIndex + " " + words[a];
			
		} // kelimeleri dolaşma
		
		return sort;
		
	} // sortWords
	
	// sıralanan kelimelerin gösterilmesi
	public static void showSortWords(String[] words) {
		
		Arrays.sort(words); // küçükten büyüğe doğru sıralama
		
		for (int i = 0; i < words.length; i++) { // sort array'inin kelimelerini yazdırma
			words[i] = words[i].replaceAll("\\s", ""); // boşlukları silme
			words[i] = words[i].replaceAll("[0-9]", ""); // sayıları silme
			System.out.println((i + 1) + ". kelime: " + words[i]);
		}
		
	} // showSortWords
	
	// girilen keliemeler sıralı girilip girilmediği
	public static boolean checkArrays(String[] words, String[] sortWords) {
		
		for (int i = 0; i < words.length; i++) { // kelime array'i ile sort array'i eşit mi değil mi
			if (!words[i].equals(sortWords[i]))
				return false; // eşit değil
				
		}
		
		return true; // eşit
	} // checkArrays
	
} // class