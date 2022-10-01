import React, { Component } from 'react'

export class NewsItem extends Component {
  article=[
    {
    "source": {
    "id": "the-wall-street-journal",
    "name": "The Wall Street Journal"
    },
    "author": "Paul Hannon and Chelsey Dulaney",
    "title": "Bank of England to Buy Bonds in Bid to Stop Spread of Crisis - The Wall Street Journal",
    "description": "The Bank of England said it would buy U.K. government bonds with long maturities “on whatever scale is necessary” in an effort to restore order to the market.",
    "url": "https://www.wsj.com/articles/bank-of-england-to-buy-bonds-to-stop-crisis-spread-11664360313",
    "urlToImage": "https://images.wsj.net/im-632457/social",
    "publishedAt": "2022-09-28T14:14:00Z",
    "content": "LONDONThe Bank of England on Wednesday said it would buy U.K. government bonds with long maturities on whatever scale is necessary in an effort to restore order to the market after a \r\nlarge set of g… [+411 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Emily Lefroy",
    "title": "'Untreatable' STI linked to infertility, miscarriage due to 'silent spread' - New York Post ",
    "description": "Amid warnings about an “out of control” STD epidemic, scientists have sounded the alarm about a new possible “superbug” STI that has proven resistant to antibiotics.",
    "url": "https://nypost.com/2022/09/28/untreatable-sti-linked-to-infertility-due-to-silent-spread/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/09/mycoplasma-genitalium-bacteria-sti.jpg?quality=75&strip=all&w=1024",
    "publishedAt": "2022-09-28T14:08:00Z",
    "content": "A new possible “superbug” STI that has proven resistant to antibiotics thus far has scientists worried amid an “out of control” STD epidemic, with the medical community saying more screenings for the… [+3293 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investor's Business Daily"
    },
    "author": "Investor's Business Daily",
    "title": "Dow Jones Rises Ahead Of Powell Speech; 10-Year Treasury Yield Briefly Tops 4%; Apple Dives - Investor's Business Daily",
    "description": "The 10-year Treasury yield briefly topped 4% for the first time in more than a decade.",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-fall-ahead-of-powell-speech-10-year-treasury-yield-briefly-tops/",
    "urlToImage": "https://www.investors.com/wp-content/uploads/2022/06/Stock-jeromepowell2022-03-gov.jpg",
    "publishedAt": "2022-09-28T13:56:00Z",
    "content": "The Dow Jones Industrial Average rose modestly Wednesday, looking to avoid a seventh straight decline. Fed chief Jerome Powell will speak at the 2022 Community Banking Research Conference in St. Loui… [+8155 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Hannah Devlin",
    "title": "Success of experimental Alzheimer's drug hailed as 'historic moment' - The Guardian",
    "description": "Study shows cognition in early-stage patients on lecanemab declines by 27% less than those on placebo",
    "url": "https://amp.theguardian.com/society/2022/sep/28/alzheimers-disease-progression-slowed-by-new-drug-lecanemab",
    "urlToImage": null,
    "publishedAt": "2022-09-28T13:43:00Z",
    "content": "Alzheimer'sStudy shows cognition in early-stage patients on lecanemab declines by 27% less than those on placebo\r\nAn experimental drug has slowed the rate of decline in memory and thinking in people … [+4455 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Holmes Lybrand",
    "title": "'The violence was you': January 6 rioter who assaulted Michael Fanone sentenced to over 7 years in prison - CNN",
    "description": "Kyle Young, one of several rioters who attacked Washington, DC, police officer Michael Fanone during the January 6, 2021, insurrection at the US Capitol was sentenced to 86 months in prison on Tuesday.",
    "url": "https://www.cnn.com/2022/09/27/politics/kyle-young-assault-michael-fanone-january-6/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220927070538-michael-fanone.jpg?q=w_800,c_fill",
    "publishedAt": "2022-09-28T13:40:00Z",
    "content": "Kyle Young, one of several rioters who attacked Washington, DC, police officer Michael Fanone during the January 6, 2021, insurrection at the US Capitol was sentenced to 86 months in prison on Tuesda… [+2414 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Jeremy Herb",
    "title": "New book: Trump nearly fired Jared and Ivanka via tweet - CNN",
    "description": "Then-President Donald Trump nearly fired his daughter Ivanka Trump and son-in-law Jared Kushner from the White House via tweet, according to a new book from New York Times reporter Maggie Haberman.",
    "url": "https://www.cnn.com/2022/09/28/politics/donald-trump-confidence-man-haberman/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220928090624-ivanka-jared-donald-trump-file.jpg?q=w_800,c_fill",
    "publishedAt": "2022-09-28T13:33:00Z",
    "content": "Then-President Donald Trump nearly fired his daughter Ivanka Trump and son-in-law Jared Kushner from the White House via tweet, according to a new book from New York Times reporter Maggie Haberman. \r… [+13156 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Tess Homan, Jamie Ross",
    "title": "The 7 things you need to know for Wednesday, September 28 - The Washington Post",
    "description": "Catch up in minutes with these 7 stories.",
    "url": "https://www.washingtonpost.com/the-seven/2022/09/28/what-to-know-for-september-28/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AKCYKOF565FL7M22KNZNISKYOM.png&w=1440",
    "publishedAt": "2022-09-28T13:32:00Z",
    "content": "Hurricane Ian is expected to slam into Florida this afternoon.\r\n<ul><li>The forecast: Ian has shifted south and is likely to make landfall between Tampa Bay and Cape Coral as a Category 4 storm stron… [+2830 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ESPN"
    },
    "author": null,
    "title": "MLB discusses plans for New York Mets-Atlanta Braves series with Hurricane Ian looming - ESPN",
    "description": "Major League Baseball is considering contingency plans for this weekend's crucial series in Atlanta between the Mets and Braves as Hurricane Ian bears down on Florida's Gulf Coast.",
    "url": "https://www.espn.com/mlb/story/_/id/34682872/mlb-discusses-plans-new-york-mets-atlanta-braves-series-hurricane-ian-looming",
    "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0928%2Fr1068066_1296x729_16%2D9.jpg",
    "publishedAt": "2022-09-28T13:26:36Z",
    "content": "Major League Baseball is considering contingency plans for this weekend's crucial series in Atlanta between the Mets and Braves as Hurricane Ian bears down on Florida's Gulf Coast.\r\nThe rapidly inten… [+3398 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "AMD Ryzen 7 7700X 8-Core CPU Review & Benchmarks vs. i7-12700KF, R9 7900X, & More - Gamers Nexus",
    "description": "Sponsor: Buy Thermaltake's Tower 100 Mini-ITX case on Amazon (https://geni.us/TuAASGt)Our review of the AMD Ryzen 7 7700X CPU features benchmarks and tests v...",
    "url": "https://www.youtube.com/watch?v=LJeEd7_Cv90",
    "urlToImage": "https://i.ytimg.com/vi/LJeEd7_Cv90/hqdefault.jpg",
    "publishedAt": "2022-09-28T13:22:10Z",
    "content": null
    },
    {
    "source": {
    "id": "ign",
    "name": "IGN"
    },
    "author": "Joe Skrebels",
    "title": "Deadpool 3: Ryan Reynolds and Hugh Jackman Tease a Violent Wolverine Debut - IGN",
    "description": "Ryan Reynolds and Hugh Jackman are having more fun after the announcement that Wolverine will appear in Deadpool 3, this time teasing a very violent fight, and making clear 2017's Logan is a \"totally separate thing\".",
    "url": "https://www.ign.com/articles/deadpool-3-ryan-reynolds-and-hugh-jackman-tease-a-violent-wolverine-debut",
    "urlToImage": "https://assets-prd.ignimgs.com/2022/09/28/untitled-1-1664369395109.jpg?width=1280",
    "publishedAt": "2022-09-28T13:21:56Z",
    "content": "Ryan Reynolds and Hugh Jackman are having more fun after the announcement that Wolverine will appear in Deadpool 3, this time teasing a very violent fight, and making clear 2017's Logan is a \"totally… [+1905 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NBCSports.com"
    },
    "author": "Josh Alper",
    "title": "Trevor Lawrence is the AFC offensive player of the week - NBC Sports",
    "description": "Trevor Lawrence‘s rookie year was a mess, but his second season with the Jaguars is off to a much better start.Jacksonville has followed up a Week One loss with a pair of wins, including a 38-10 rout of the Chargers on the road in Week Three. Lawrence had a h…",
    "url": "https://profootballtalk.nbcsports.com/2022/09/28/trevor-lawrence-is-the-afc-offensive-player-of-the-week/",
    "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/09/GettyImages-1243511126-e1664368468284.jpg",
    "publishedAt": "2022-09-28T12:34:00Z",
    "content": "Trevor Lawrences rookie year was a mess, but his second season with the Jaguars is off to a much better start.\r\nJacksonville has followed up a Week One loss with a pair of wins, including a 38-10 rou… [+553 chars]"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "US embassy in Russia tells Americans to leave the country - The Hill",
    "description": null,
    "url": "https://news.google.com/__i/rss/rd/articles/CBMia2h0dHBzOi8vdGhlaGlsbC5jb20vcG9saWN5L2ludGVybmF0aW9uYWwvMzY2NDUzMy11cy1lbWJhc3N5LWluLXJ1c3NpYS10ZWxscy1hbWVyaWNhbnMtdG8tbGVhdmUtdGhlLWNvdW50cnkv0gEA?oc=5",
    "urlToImage": null,
    "publishedAt": "2022-09-28T11:59:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Sam Meredith",
    "title": "Europe vows ‘robust and united’ response to suspected sabotage of two Russian gas pipelines - CNBC",
    "description": "Some European leaders have suggested possible sabotage, particularly as the suspected attack comes amid a bitter energy standoff between Brussels and Moscow.",
    "url": "https://www.cnbc.com/2022/09/28/nord-stream-gas-leaks-europe-vows-response-to-suspected-sabotage.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107125070-1664289899060-gettyimages-1243544531-AA_27092022_879420.jpeg?v=1664365376&w=1920&h=1080",
    "publishedAt": "2022-09-28T11:27:53Z",
    "content": "The European Union on Wednesday raced to find out exactly what happened and why after mystery gas leaks hit two underwater Russian gas pipelines, warning of retaliatory measures for any deliberate at… [+4294 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Mike Murphy",
    "title": "Hackers hijack Fast Company, send obscene push alert through Apple News - MarketWatch",
    "description": "Fast Company takes down website after its CMS is breached",
    "url": "https://www.marketwatch.com/story/hackers-hijack-fast-company-send-obscene-push-alert-through-apple-news-11664331724",
    "urlToImage": "https://images.mktw.net/im-608290/social",
    "publishedAt": "2022-09-28T11:18:00Z",
    "content": "Many Apple News users received a push notification Tuesday containing racist and obscene language, the result of a hack.The offensive message came in a push alert around 8:18 p.m. Eastern from the ac… [+1232 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Diana Olick",
    "title": "Mortgage refinancing drops to a 22-year low as interest rates surge even higher - CNBC",
    "description": "Mortgage rates drove higher last week after the Federal Reserve signaled it would continue its aggressive action to cool inflation. That hurt mortgage demand.",
    "url": "https://www.cnbc.com/2022/09/28/mortgage-refinancing-drops-to-a-22-year-low-.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/102075466-IMG_3522_copy.jpg?v=1664362801&w=1920&h=1080",
    "publishedAt": "2022-09-28T11:00:01Z",
    "content": "Mortgage rates drove even higher last week after the Federal Reserve signaled it would continue its aggressive action to cool inflation. That, and rising uncertainty in the overall housing market, ca… [+1740 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Anders Hagstrom",
    "title": "North Korea fires third ballistic missile ahead of VP Harris arrival in Seoul - Fox News",
    "description": "North Korea fired a third ballistic missile into the sea ahead of Vice President Kamala Harris' trip to Seoul. The U.S. is conducting military exercises with South Korea.",
    "url": "https://www.foxnews.com/world/north-korea-fires-third-ballistic-missile-ahead-vp-harris-arrival-seoul",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/kamala-harris-travel.png",
    "publishedAt": "2022-09-28T10:53:09Z",
    "content": "North Korea fired a third ballistic missile into the sea on the eve of Vice President Kamala Harris' arrival in the South Korean capital Wednesday.\r\nWednesday's missile is the latest show of force fr… [+2719 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Mariana Alfaro, Annabelle Timsit",
    "title": "Mastriano in 2019: Women violating abortion ban should get murder charges - The Washington Post",
    "description": "Doug Mastriano, Trump-backed nominee for Pennsylvania governor, said in 2019 that violators of his proposed 10-week abortion ban should be charged with murder.",
    "url": "https://www.washingtonpost.com/politics/2022/09/28/doug-mastriano-abortion/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EIQ2L4RQHQI63PGGBB2LE2XCSY.jpg&w=1440",
    "publishedAt": "2022-09-28T10:48:00Z",
    "content": "Doug Mastriano, a Pennsylvania state senator who is the GOP nominee for governor, once said that women who violated his proposed abortion ban should be charged with murder.\r\nMastriano who was endorse… [+4272 chars]"
    },
    {
    "source": {
    "id": "politico",
    "name": "Politico"
    },
    "author": null,
    "title": "Why Manchin backed off on his top priority - POLITICO",
    "description": "Facing the apparent limits of his leverage after 20 months exerting it over a 50-50 Senate, the West Virginia centrist strategically retreated on energy permitting.",
    "url": "https://www.politico.com/news/2022/09/28/manchin-senate-permitting-reform-00059152",
    "urlToImage": "https://static.politico.com/d2/b4/ce6e30e14dfcb5fc9eac0d3da1f2/2022-0927-manchin-3200-2-edit.jpg",
    "publishedAt": "2022-09-28T08:30:00Z",
    "content": "But Manchins final major priority after a stretch in which everything broke his way needed the support of Republicans. And there were simply too many problems for him to solve in too short a time aft… [+6178 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TMZ"
    },
    "author": "TMZ Staff",
    "title": "Jeffrey Dahmer Prosecutor Denies Racial & Homophobic Bias From Cops - TMZ",
    "description": "The prosecutor who put Jeffrey Dahmer behind bars is pushing back against the narrative Netflix puts forth in its new show -- namely, that cops had it out for gay and Black people.",
    "url": "https://www.tmz.com/2022/09/28/jeffrey-dahmer-prosecutor-denies-racial-homophobic-bias-police/",
    "urlToImage": "https://imagez.tmz.com/image/d6/16by9/2022/09/27/d6d7d7220b8d43518d81f3de848d205f_xl.jpg",
    "publishedAt": "2022-09-28T08:00:00Z",
    "content": "The prosecutor who put Jeffrey Dahmer behind bars is pushing back against the narrative Netflix puts forth in its new show -- namely, that cops ignored obvious clues because the case involved gay and… [+1952 chars]"
    },
    {
    "source": {
    "id": "fortune",
    "name": "Fortune"
    },
    "author": "Lance Lambert",
    "title": "These 2 maps show the U.S home price correction is sharper—and more widespread—than previously thought - Fortune",
    "description": "\"Home prices will fall even though supply levels are not ripping higher,” says Rick Palacios Jr., head of research at John Burns Real Estate Consulting.",
    "url": "https://fortune.com/2022/09/28/housing-market-home-price-correction-2022/",
    "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/09/8UDBG-how-the-ongoing-housing-correction-is-shifting-regional-home-prices-according-to-zillow.png?resize=1200,600",
    "publishedAt": "2022-09-28T06:52:00Z",
    "content": "The Pandemic Housing Boom saw U.S. home prices soar 42%. Heading forward, some of those gains will get erased. On Tuesday, the going home price correction finally showed up in the Case-Shiller U.S. N… [+3560 chars]"
    }
    ]
  
  
  
  
  constructor(){
      super();
      console.log("Hello i am  constroter");
      this.state={ article: this.article,
                   loading: false}
  }
  
  render() {
    let {title,description ,imageUrl,newsUrl} =this.props;

    return (
      <div>
        <div className="card my-3" >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
