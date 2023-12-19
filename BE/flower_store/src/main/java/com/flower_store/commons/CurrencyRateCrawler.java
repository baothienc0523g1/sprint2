package com.flower_store.commons;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CurrencyRateCrawler {
    private static final Logger logger = LoggerFactory.getLogger(CurrencyRateCrawler.class);

    public String currencyCrawl() {
        StringBuilder result = new StringBuilder();
        try {
            URL CRAWL_URL = new URL("https://www.24h.com.vn/ty-gia-ngoai-te-ttcb-c426.html");
            URLConnection urlConnection = CRAWL_URL.openConnection();

            InputStreamReader inputStreamReader = new InputStreamReader(urlConnection.getInputStream());
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

            String pointer;
            while ((pointer = bufferedReader.readLine()) != null) {
                result.append(pointer);
            }

            Pattern pattern = Pattern.compile("<h3.*?</h3>");
            Matcher matcher = pattern.matcher(result);

        } catch (IOException e) {
            logger.warn("IOException while crawling URL: {}", e.getMessage());
        } catch (Exception e) {
            logger.warn("Exception while crawling URL: {}", e.getMessage());
        }


        return result.toString();
    }
}
