require 'nokogiri'
require 'open-uri'
require 'json'

class QuoteScraper
  ROOT_URL = 'https://www.goodreads.com/quotes?page='
  PAGE_LIMIT = 25
  QUOTE_CUTOFF = 280

  def initialize
    @quotes = []
    @pages = []
    PAGE_LIMIT.times { |i| @pages.push(Nokogiri::HTML(URI.open("#{ROOT_URL}#{i}"))) }
  end

  def gather_data
    File.open("quote_data.json", "w") { |f| f.write quote_data }
  end

  private

  def quote_data
    objects = []

    @pages.each do |page|

      page.css(".quote").each do |quote|
        content = quote.search(".quoteText > text()").text.to_s.strip.split("”")[0].gsub("“", "")
        author = quote.search(".authorOrTitle > text()").text.to_s.split(',')[0].strip

        objects.push("mq('#{content}', '#{author}')") if content.length < QUOTE_CUTOFF
      end
    end

    objects.to_json
  end
end

QuoteScraper.new().gather_data
