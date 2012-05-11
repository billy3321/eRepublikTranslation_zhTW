// ==UserScript==
// @name           eRepublik Traditional Chinese Translation
// @namespace      Traditional Chinese Translation
// @author         BillWilson, blackca, Yamamatsu, Mickeyhowl
// @description    eRepublik 正體中文版
// @version        0.3.5.0509
// @match          http://*.erepublik.com/*
// @include        http://*.erepublik.com/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require        https://raw.github.com/cowboy/jquery-replacetext/master/jquery.ba-replacetext.min.js
// @require        http://sizzlemctwizzle.com/updater.php?id=128091&days=1&show
// ==/UserScript==

/*  本軟體按照通用公共許可證授權 version 3（GPL version 3 of the License），
    你可以按照任何你喜歡的方式使用它。 本軟體不提供任何顯式聲明的或隱含的擔保，
    也不對使用過程中產生的任何損壞或者資料丟失承擔任何責任。

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var lang = document.location.pathname.substr(1,2);
var host = document.location.hostname.split('.')[0];

/*  [function] $.exact('string'); http://blog.darkthread.net/post-2009-01-24-jquery-custom-selector.aspx  */

$.extend($.expr[":"], { exact: function(a, i, m) { return (a.textContent || a.innerText || jQuery(a).text() || '').toLowerCase() == m[3].toLowerCase(); } });

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 共用區 Common strings
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
$('strong#foodText').css('font-family','微軟正黑體,微软雅黑');
// common catalog  
$('#menu ul li#menu2 a').css('background-image','url(\"http://i.imgur.com/Y950K.png\")');
$('#menu ul li#menu3 a').css('background-image','url(\"http://i.imgur.com/Y950K.png\")');
$('#menu ul li#menu4 a').css('background-image','url(\"http://i.imgur.com/Y950K.png\")');
$('#menu ul li#menu5 a').css('background-image','url(\"http://i.imgur.com/Y950K.png\")');
$('#menu > ul > li#menu3').append('<ul><li><a href=\"http://www.erepublik.com/' +lang+ '/military/campaigns" target="_self">戰役列表</a></li>'+
		'<li><a href=\"http://www.erepublik.com/' +lang+ '/newspaper/roc-ministry-of-defense-245452/1\" target="_self">國防部軍令</a></li></ul>');
$('#menu > ul > li#menu3 > ul').append(
'<li><a href=\"http://www.erepublik.com/en/article/-rocas--1997891/1/20" target="_blank">ROCAS</a></li>');
$("#menu > ul > li#menu4 > ul > li > a:contains('Marketplace')").text('商品市場');
$("#menu > ul > li#menu4 > ul > li > a:contains('Monetary')").text('外匯市場');
$("#menu > ul > li#menu4 > ul > li > a:contains('Job')").text('就業市場');
$("#menu > ul > li#menu4 > ul > li > a:contains('Companies for sale')").text('二手公司拍賣市場');
$("#menu > ul > li#menu5 > ul > li > a:contains('World Map')").text('世界地圖');
$("#menu > ul > li#menu5 > ul > li > a:contains('My Party')").text('我的政黨');
$("#menu > ul > li#menu5 > ul > li > a:contains('Elections')").text('選舉中心');
$("#menu > ul > li#menu5 > ul > li > a:contains('Military Unit')").text('軍團');
$("#menu > ul > li#menu5 > ul > li > a:contains('Invite friends')").text('邀請朋友');
$("#menu > ul > li#menu5 > ul > li > a:contains('My Organizations')").text('我的組織號');
$("#menu > ul > li#menu5 > ul > li > a:contains('Badges')").text('官方徽章圖');
$('#menu > ul > li#menu5 > ul').prepend('<li><a href=\"http://www.erepublik.com/en/news/latest/all\" target="_self">新聞傳媒</a></li>');
$('#menu > ul > li#menu5 > ul').append(
'<li><a href=\"http://qchat.rizon.net/?channels=PTT_formosa\" target="_blank">台灣IRC頻道</a></li>');
$('#menu > ul > li#menu5 > ul').append(
'<li><a href=\"http://erep-roc.com/forum/forum.php" target="_blank">eROC論壇</a></li>');
// sidebar
var Explevel = $('#experienceTooltip > strong').eq(0).text();
var Exppoint = $('#experienceTooltip > strong').eq(1).text();
var Nextlevel = $('#experienceTooltip > strong').eq(2).text();
var healLimit = $('#eatFoodTooltip big.tooltip_health_limit').text();
$('#wellnessTooltip').html('<img class="tip" alt="" src="http://www.erepublik.com/images/modules/sidebar/yellow_arrow_tip.png">'+'• 工作，訓練，戰鬥，都會減少體力'+'<br>'+'• 食物，醫院，能量棒，能提升你的體力');
$('#experienceTooltip').html('<img src=\"http://www.erepublik.com/images/modules/sidebar/yellow_arrow_tip.png\" class=\"tip\" alt=\"\" />'+
'經驗等級: <strong>LV. '+Explevel+'</strong><br />經驗值: <strong>'+Exppoint+'</strong><br />下次升級需: <strong>'+Nextlevel+'</strong><br />');
$('#eatFoodTooltip > p:eq(0)').text('按此按鈕後，將會從倉庫中食用麵包，並會將體力恢復至最大值');
$('#eatFoodTooltip > p:eq(1)').html('你目前最多可以恢復 <big>'+healLimit+'</big> 體力');
$('#eatFoodTooltip > p:eq(1) > big').attr('class','tooltip_health_limit');
$('#eatFoodTooltip > small').replaceText('100 more recoverable Health in','下一個100點體力值額度於')
$('#sidebar_missions > .content > b:first').text('任務');
$('strong#foodText').text('按此吃食物');
// others
$('a.logout').text('登出');
$('a.prev').text('上一頁');
$('a.next').text('下一頁');
// footer
$('#footer > p > a:eq(0)').text('遊戲百科');
$('#footer > p > a:eq(1)').text('官方部落格');
$('#footer > p > a:eq(2)').text('新聞發佈');
$('#footer > p > a:eq(3)').text('聯絡管理員');
$('#footer > p > a:eq(4)').text('工作機會');
$('#footer > p > a:eq(5)').text('服務條款');
$('#footer > p > a:eq(6)').text('隱私權政策');
$('#footer > p > a:eq(7)').text('合作夥伴');
$('#footer > p > a:eq(8)').text('遊戲規則');

window.setTimeout(missionstats, 500);
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/	
// 首頁 www.erepublik.com/en
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 新手視窗
    $('#citizen_feed_friends .start_message p').text('加入更多好友，讓你的塗鴉牆更豐富');
    $('#large_sidebar .user_goals h4').replaceText('Tutorial','新手訓練');
    $('#large_sidebar .user_goals ul li:eq(0) span').text('訓練');
    $('#large_sidebar .user_goals ul li:eq(1) span').text('戰鬥');
    $('#large_sidebar .user_goals ul li:eq(2) span').text('工作');
    $('#large_sidebar .user_goals ul li:eq(3) span').text('完成每日任務');
    $('#large_sidebar .user_goals ul li:eq(4) span').text('吃食物');
// citizen feed    塗鴉牆
function changeFeed() {	if ($(".post_content a[trigger='reply']").text() != '留言') {
		$(".post_content a[trigger='reply']").text('留言');
		$(".post_content a[trigger='post_like']").text('讚');
		$(".post_content span[trigger='add_comment']").text('留言');
		$('.post_content div.fake_input').text('留言吧');
		$('.post_content a.report').text('檢舉');
		$('.feed_title') .text('公民塗鴉牆').css('font-family','微軟正黑體,微软雅黑');
                $('a.blue_arrow_down_medium span').text('更多貼文');
                $('#citizen_feed.duo .shouter textarea').text('說些什麼吧...');
                $("#citizen_feed .post_comments b a:contains('Report')").text('檢舉');
                $("#citizen_feed .post_comments b a:contains('Vote')").text('讚');
	}
	window.setTimeout(changeFeed, 500);
 }



if ((document.location.toString()=="http://www.erepublik.com/"+lang) || (document.location.toString().indexOf("?viewPost=")!==-1)) {
$('h1').css('font-family','微軟正黑體,微软雅黑');
$('#daily_pop > h2').css('font-family','微軟正黑體,微软雅黑');
$('#daily_pop > h3').css('font-family','微軟正黑體,微软雅黑');

// daily task 每日任務
$("#content > .column > div > h1:contains('Daily task')").text('每日任務');
$('.boxes.daily_tasks > div strong') .text('工作和訓練');
$('.boxes.daily_tasks > div .blue_beauty') .text('前往我的領域');
$('.boxes.daily_tasks > div .green_beauty') .text('領取獎勵');

// daily Order 每日軍令
$('#homepage_feed div#orderContainer h1') .text('每日軍令');
$('.boxes.order_of_day .green_beauty') .text('領取獎勵');
$('.boxes.order_of_day .blue_beauty') .text('前往戰鬥');
$('.boxes.order_of_day strong').replaceText('Fight for','幫助').replaceText(' in ',' 在 ');

// 新兵任務
$("#content > .column > div > h1:contains('Recruit's orders')").text('新兵任務');
$('#content > .column > div > p').text('完成新兵任務，成為正式團員');
$('.boxes.recruit_orders > div ul li:eq(0) strong').text('軍階到達General');
$('.boxes.recruit_orders > div ul li:eq(1) strong').text('擊敗10位敵人');
$('.boxes.recruit_orders > div .blue_beauty').text('前往戰役列表');
$('.boxes.recruit_orders > div .green_beauty').text('成為正式團員')

// battle list 戰役列表
$("#homepage_feed .column:eq(0) > h1:contains('Military campaigns')").text('戰役列表');
$("#battle_listing > h4:exact('Campaign of the day')").text('重要戰役');
$("#battle_listing > .info_message > tbody > tr >td:first").text('目前Republic of China (Taiwan)沒有任何戰役');
$("#battle_listing > h4:contains('Allies')").text('目前 同盟國 的戰役');
$("#battle_listing > h4:contains('Campaigns')").text('目前 '+$("#battle_listing > h4:contains('Campaigns')").replaceText('Campaigns','的戰役').text());
$("#battle_listing span:exact('Fight')").text('戰鬥');
$('#battle_listing .rest > a:eq(0)').text('更多戰役');
$('#battle_listing .rest > a:eq(1)').text('最新事件');
$('#battle_listing > ul.resistance_war').find('a#fundRW_btn > span').text('資助');
$('#battle_listing > ul.resistance_war').find('.info > small').text('組織起義戰爭在');
$('#battle_listing > ul.resistance_war').find(".fighters > em:contains('/10 supporters')").replaceText('/10 supporters','/10 贊助人數');
$("#battle_listing > ul.resistance_war").find('.fighters > small >a#supportRW_btn').text('關注');
window.setTimeout(changeFeed, 500);

	// news list 報紙分類
        $("#homepage_feed .column:eq(0) > h1:contains('Top news')").text('報紙頭條');
        $('.media_widget > a.more_news').text('更多報紙');
        $('.media_widget .mini_news_categories span').text('報紙分類');
	$('#articles > div > a.mbutton:eq(0) > span').text('新人指導及教育');
	$('#articles > div > a.mbutton:eq(1) > span').text('軍事命令以及訊息');
	$('#articles > div > a.mbutton:eq(2) > span').text('戰略分析');
	$('#articles > div > a.mbutton:eq(3) > span').text('政治論壇及分析');
	$('#articles > div > a.mbutton:eq(4) > span').text('經濟焦點');
	$('#articles > div > a.mbutton:eq(5) > span').text('社交娛樂');
	$('#articles > div > a.mbutton:eq(6) > span').text('閱讀已訂閱報紙及管理');
};

 // 任務清單
function missionstats() {
    $(".mission_pop h3 b:contains('Society builder')").text('社交達人');
    $(".mission_pop .content > em:contains('You can be really powerful only by having your friends near you.')").text('哩金厲害，召集到那麼多朋友');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Get the Society Builder Achievement.')").text('取得社交達人獎章');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Invite 10 people to eRepublik and help them reach level 10.')").text('邀請10位好友進入erepublik');

    $(".mission_pop h3 b:contains('Training Day')").text('開始訓練');
    $(".mission_pop .content > em:contains('Strength is important, train every day to increase it')").text('力量很重要，每天都記得要訓練');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Train for the first time')").text('訓練一次');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Click the Train button from your Training Grounds')").text('到你的訓練場所訓練');
    $(".mission_pop .requirements .req_content li:eq(0) a:contains('My training grounds')").text('前往我的訓練場所');

    $(".mission_pop h3 b:contains('First Steps in Battle')").text('初入戰場');
    $(".mission_pop .content > em:contains('Increase your military rank by fighting on the battlefield')").text('在戰場上奮戰，以提升你的軍階');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Click the Fight button on the battlefield')").text('在戰場上戰鬥');
    $(".mission_pop .requirements .req_content li:eq(0) a:contains('Go to Military campaigns')").text('前往戰役列表');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Achieve the military rank of Private')").text('軍階提升至Private');
    $(".mission_pop .requirements .req_content li:eq(1) strong:contains('Restore 100 health in one day')").text('在一天內補充100體');

    $(".mission_pop h3 b:contains('A Future Hero')").text('未來英雄');
    $(".mission_pop .content > em:contains('Fight until you defeat your enemies to help your country')").text('在戰場擊敗敵人，幫助你的國家');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Defeat 5 enemies')").text('擊敗5位敵人');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Go to a battle and click the Fight button until you defeat the enemy')").text('到戰場持續擊敗敵人');

    $(".mission_pop h3 b:contains('First Paycheck')").text('第一份薪水');
    $(".mission_pop .content > em:contains('Work day after day to increase your wealth')").text('每天工作，累積你的財富');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Get a job')").text('找一份工作');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Go to My places and click Get a job')").text('到我的領域找一份工作');
    $(".mission_pop .requirements .req_content li:eq(0) a:contains('My places')").text('我的領域');
    $(".mission_pop .requirements .req_content li:eq(1) strong:contains('Work')").text('工作');

    $(".mission_pop h3 b:contains('Daily Task')").text('每日任務');
    $(".mission_pop .content > em:contains('Dedicated players get rewards every day')").text('每天完成都有獎勵可拿');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Complete the Daily task')").text('完成每日任務');

    $(".mission_pop h3 b:contains('Leveling Up')").text('等級提升');
    $(".mission_pop .content > em:contains('Fighting is a good way of earning experience points and advancing to a higher level')").text('戰鬥有助於你提升等級');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Reach Level 5')").text('提升至等級5');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Work, train and fight every day to have a higher level')").text('工作,訓練,或者戰鬥都能獲得經驗值');

    $(".mission_pop h3 b:contains('A Better Place to Live in')").text('封建時代');
    $(".mission_pop .content > em:contains('Having a high quality Town Center helps you fight more every day')").text('更高級的城鎮中心，可以讓你的體力額更多');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Upgrade Town Center to Level 2')").text('升級城鎮中心至2星');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Go to your Health Buildings and click on Upgrade Town Center')").text('前往體力額建築頁面升級你的城鎮中心');
    $(".mission_pop .requirements .req_content li:eq(0) a:contains('My health expansions')").text('我的體力額建築');

    $(".mission_pop h3 b:contains('Join the Army')").text('加入軍團');
    $(".mission_pop .content > em:contains('The army is about being united and fighting where your country needs you')").text('軍團是國家團結力與戰鬥力的象徵');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Join a military unit')").text('加入軍團');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Go to the Military unit page to choose your military unit')").text('到軍團列表選擇適合的軍團');
    $(".mission_pop .requirements .req_content li:eq(0) a:contains('See recommended Military Units')").text('軍團列表');

    $(".mission_pop h3 b:contains('Full Membership')").text('正式成員');
    $(".mission_pop .content > em:contains('Defeating enemies will help you become a full member')").text('持續擊敗敵人，成為軍團的正式團員');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Acquire full membership in your military unit')").text('成為正式團員');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Complete the recruit's orders to become a full member')").text('完成新兵任務成為正式團員');

    $(".mission_pop h3 b:contains('Every Day Job')").text('每天上工');
    $(".mission_pop .content > em:contains('Work and train every day so that your country can rely on you!')").text('每天工作和訓練都能幫助你的國家');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Work for 2 days')").text('工作2天');
    $(".mission_pop .requirements .req_content li:eq(1) strong:contains('Train for 2 days')").text('訓練2天');
    $(".mission_pop .requirements .req_content li:eq(1) a:contains('My training grounds')").text('前往訓練場所');

    $(".mission_pop h3 b:contains('Refill your Inventory')").text('補充庫存');
    $(".mission_pop .content > em:contains('Need more products? Go to the marketplace!')").text('需要更多的東西? 到市場逛逛吧!');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Buy 10 food')").text('買10個食物');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Buy Food from the marketplace')").text('從市場上買一些食物');
    $(".mission_pop .requirements .req_content li:eq(0) a:contains('Go to Marketplace')").text('前往市場');
    $(".mission_pop .requirements .req_content li:eq(1) strong:contains('Buy 5 weapons')").text('買5把武器');
    $(".mission_pop .requirements .req_content li:eq(1) small:contains('Buy Weapons from the marketplace')").text('從市場上買一些武器');
    $(".mission_pop .requirements .req_content li:eq(1) a:contains('Go to Marketplace')").text('前往市場');

    $(".mission_pop h3 b:contains('Complete your Orders')").text('完成目標');
    $(".mission_pop .content > em:contains('The army is about being united and fight where the country needs you.')").text('軍團是國家團結力與戰鬥力的象徵');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Complete Daily Order')").text('完成每日軍團任務');
    $(".mission_pop .requirements .req_content li:eq(1) strong:contains('Restore 300 health in one day')").text('在一天內補充300體');

    $(".mission_pop h3 b:contains('Rank Up')").text('軍階提升');
    $(".mission_pop .content > em:contains('Fight every day to increase your rank')").text('每天戰鬥提高你的軍階');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Achieve the military rank of Sergeant')").text('軍階提升至Sergeant');

    $(".mission_pop h3 b:contains('Strength Up')").text('力量提升');
    $(".mission_pop .content > em:contains('The stronger you are, the higher your damage will be')").text('力量越高拳頭越大');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Reach 50 strength')").text('提升50點力量');

    $(".mission_pop h3 b:contains('Start Production')").text('開始生產');
    $(".mission_pop .content > em:contains('Work in your companies to produce stock so that you can fight more.')").text('在自己的工廠工作讓你自給自足');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Work in your own companies')").text('在自己的工廠工作');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Choose to work as manager in your companies and start production')").text('選擇自己的工廠開始生產物品');

    $(".mission_pop h3 b:contains('First Weapon Factory')").text('第一間武器工廠');
    $(".mission_pop .content > em:contains('It's easier to take down enemies when having weapons rather than fighting with your bare hands.')").text('拿著武器上戰場，較容易擊敗敵人');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Have 1 Weapons Factory')").text('擁有一間武器工廠');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Once you have a Weapons Factory you can start producing Weapons')").text('建造武器工廠讓你可以生產武器');
    $(".mission_pop .requirements .req_content li:eq(0) a:contains('Go to Build menu')").text('前往建造頁面');

    $(".mission_pop h3 b:contains('A better place to live (II)')").text('城堡時代');
    $(".mission_pop .content > em:contains('Have a high quality Town center. It helps you fight more every day')").text('更高級的城鎮中心，可以讓你的體力額更多');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Upgrade your Town center to level 3')").text('升級城鎮中心至3星');

    $(".mission_pop h3 b:contains('True Patriot')").text('愛國者');
    $(".mission_pop .content > em:contains('The time has come! Face your biggest opponent and help your country prevail.')").text('幫助你的國家面對強大的敵人');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Have 20 Weapons')").text('擁有20把武器');
    $(".mission_pop .requirements .req_content li:eq(1) strong:contains('Defeat 30 enemies in a war against your Natural Enemy.')").text('擊敗NE戰場30位敵人');

    $(".mission_pop h3 b:contains('Work with your friends (I)')").text('幫你的好友工作part 1');
    $(".mission_pop .content > em:contains('Work with your friends for a better productivity.')").text('幫助你的好友提高生產力');
    $(".mission_pop .requirements .req_content li:eq(0) strong:contains('Post a job offer and hire a citizen')").text('招募一位員工');
    $(".mission_pop .requirements .req_content li:eq(0) small:contains('Select the Manage employees button from your companies page.')").text('前往我的領域雇員管理頁面，招募一位員工來完成這項任務');
    $(".mission_pop .requirements .req_content li:eq(1) strong:contains('Pay one salary to another citizen')").text('支付一次薪水');
    $(".mission_pop .requirements .req_content li:eq(1) small:contains('Check the salaries in your country and your offer.')").text('到就業市場查詢最高薪資');

	window.setTimeout(missionstats, 500);
};

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 個人 www.erepublik.com/en/main/citizen
//          www.erepublik.com/en/economy/donate-items/
//          www.erepublik.com/en/economy/donate-money/
//   - 現金 www.erepublik.com/en/economy/citizen-accounts/
//   - 朋友 www.erepublik.com/en/main/citizen-friends/
//   - 移動 www.erepublik.com/en/citizen/change-residence
//   - 密碼 www.erepublik.com/en/citizen/change-password
//   - 編輯 www.erepublik.com/en/citizen/edit/profile
// 國藉 www.erepublik.com/en/citizenship
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if ((document.location.toString().indexOf("/citizen")!==-1) || (document.location.toString().indexOf("/economy/donate-")!==-1)) {
	$('h3').css('font-family','微軟正黑體,微软雅黑');
	// layout menu
	$('.citizen_profile_header.auth > .citizen_edit > a > span').html('<img src="http://www.erepublik.com/images/modules/citizenprofile/edit.png">編輯資料');
	$('.citizen_profile_header.auth > .citizen_menu > li:eq(0) > a').text('總覽');
	$('.citizen_profile_header.auth > .citizen_menu > li:eq(1) > a').text('現金帳戶');
	$('.citizen_profile_header.auth > .citizen_menu > li:eq(2) > a').text('倉庫');
	$(".citizen_profile_header.auth > .citizen_state > div.is > span:contains('Dead citizen')").replaceText('Dead citizen','此人已死，有事燒紙');
	$(".citizen_profile_header.auth > .citizen_state > div.is > span:contains('Temporary banned')").replaceText('Temporary banned','暫時停權');
	$(".citizen_profile_header.auth > .citizen_state > div.is > span:contains('Permanent banned')").replaceText('Permanent banned','永久停權');
	$('.citizen_profile_header.auth > .citizen_actions > a.action_friend.tip').attr('title','加為好友');
	$('.citizen_profile_header.auth > .citizen_actions > a.action_friend_remove.tip').attr('title','移除好友');
	$('.citizen_profile_header.auth > .citizen_actions > a.action_message.tip').attr('title','發送訊息');
	$('.citizen_profile_header.auth > .citizen_actions > a.action_donate.tip').attr('title','捐贈');
	$('.citizen_profile_header.auth > .citizen_status > div > small').text('經驗值點數');
	// profile sidebar
	$('.citizen_sidebar > div > small:eq(0)').replaceText('Location:','目前所在地').find("a:contains('change')").html('<a href="http://www.erepublik.com/en/citizen/change-residence" title="">(移動)</a>');
	$('.citizen_sidebar > div > small:eq(1)').replaceText('Citizenship:','公民國籍').find("a:contains('change')").html('<a href="http://www.erepublik.com/en/citizenship" title="">(更改)</a>');
	$('.citizen_sidebar > div > .citizen_second > small:eq(0)').text('eRepublik 生日');
	$('.citizen_sidebar > div > .citizen_second > small:eq(1) > a').replaceText('National rank','國內等級排名');
	$('.citizen_sidebar > .citizen_activity > div.place:eq(0) > h3.noactivity').html('<img src="http://www.erepublik.com/images/modules/_icons/no_political_activity.png">沒有加入政黨');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > h3:contains('Party Member')").html('<img src="http://www.erepublik.com/images/modules/_icons/party_member.png">政黨成員');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > h3:contains('Party President')").html('<img src="http://www.erepublik.com/images/modules/_icons/party_president.png">黨主席');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > h3:contains('Congress Member')").html('<img src="http://www.erepublik.com/images/modules/_icons/congress_member.png">國會議員');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > h3:contains('Country President')").html('<img src="http://www.erepublik.com/images/modules/_icons/country_president.png">國家總統');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Far-left Wing')").text('極左翼政黨');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Center-left Wing')").text('中間偏左翼政黨');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Center Wing')").text('中間政黨');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Center-right Wing')").text('中間偏右翼政黨');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Far-right Wing')").text('極右翼政黨');
	$('.citizen_sidebar > .citizen_activity > div.place:eq(1) > h3.noactivity').html('<img src="http://www.erepublik.com/images/modules/_icons/no_mu.png">沒有加入軍團');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('Recruit')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">軍團菜鳥');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('Member')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">軍團成員');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('Captain')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">軍團小隊長');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('2nd Commander')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">軍團副指揮官');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('Commander')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">軍團指揮官');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(2) > h3.noactivity:contains('No media activity')").html('<img alt="" src="http://www.erepublik.com/images/modules/_icons/no_media_activity.png">沒有創立報紙</a>');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(2) > h3:contains('Press director')").html('<img src="http://www.erepublik.com/images/modules/_icons/press_director.png">報社社長');
	$(".citizen_sidebar > .citizen_activity > div.place:eq(2) > h3:contains('Create newspaper')").html('<img src="http://www.erepublik.com/images/modules/_icons/press_director.png"><a href="/en/create-newspaper">建立報紙</a>');
	$('.citizen_sidebar > .citizen_activity > h4.friends_title > a').replaceText('Friends','朋友 ');
	$('.citizen_sidebar > .citizen_activity > a.view_friends').text('查看全部');
	// profile content
	$(".citizen_content > h3.mbot2:contains('About me')").html('關於我');
	$(".citizen_content > h3.mbot2:contains('Achievements')").html('成就獎章');
	// achievment
	$("ul#achievment > li:eq(0) > .hinter > span > p:eq(0) > strong").text("模範員工");
	$("ul#achievment > li:eq(0) > .hinter > span > p:eq(1)").text("連續工作30天");
	$("ul#achievment > li:eq(1) > .hinter > span > p:eq(0) > strong").text("國會議員");
	$("ul#achievment > li:eq(1) > .hinter > span > p:eq(1)").text("贏得國會大選");
	$("ul#achievment > li:eq(2) > .hinter > span > p:eq(0) > strong").text("國家元首");
	$("ul#achievment > li:eq(2) > .hinter > span > p:eq(1)").text("贏得總統大選");
	$("ul#achievment > li:eq(3) > .hinter > span > p:eq(0) > strong").text("媒體大亨");
	$("ul#achievment > li:eq(3) > .hinter > span > p:eq(1)").text("訂閱你報紙的讀者達到 1000 人");
	$("ul#achievment > li:eq(4) > .hinter > span > p:eq(0) > strong").text("戰鬥英雄");
	$("ul#achievment > li:eq(4) > .hinter > span > p:eq(1)").text("在一場戰鬥中達到最高的戰爭影響力");
	$("ul#achievment > li:eq(5) > .hinter > span > p:eq(0) > strong").text("戰役英雄");
	$("ul#achievment > li:eq(5) > .hinter > span > p:eq(1)").text("在一場戰役中達到最高的戰爭影響");
	$("ul#achievment > li:eq(6) > .hinter > span > p:eq(0) > strong").text("起義英雄");
	$("ul#achievment > li:eq(6) > .hinter > span > p:eq(1)").text("發動一場起義戰爭並成功解放該地區");
	$("ul#achievment > li:eq(7) > .hinter > span > p:eq(0) > strong").text("超級大兵");
	$("ul#achievment > li:eq(7) > .hinter > span > p:eq(1)").text("累計達到250點力量點數");
	$("ul#achievment > li:eq(8) > .hinter > span > p:eq(0) > strong").text("社交達人");
	$("ul#achievment > li:eq(8) > .hinter > span > p:eq(1)").text("邀請 10 人加入 eRepublik 並且幫助他們達到 Lv10");
	$("ul#achievment > li:eq(9) > .hinter > span > p:eq(0) > strong").text("傭兵獎章");
	$("ul#achievment > li:eq(9) > .hinter > span > p:eq(1)").text("幫助50個國家除掉25個敵人");
	$("ul#achievment > li:eq(10) > .hinter > span > p:eq(0) > strong").text("戰神獎章");
        $("ul#achievment > li:eq(10) > .hinter > span > p:contains('Have one of the highes')").replaceText('Have one of the highest daily influences in eRepublik for 30 different days','累積30天登上影響力排行');
        $("ul#achievment > li:eq(11) > .hinter > span > p:eq(0) > strong").text("愛國獎章");
        $("ul#achievment > li:eq(11) > .hinter > span > p:eq(1)").replaceText('Reach','達到').replaceText('damage while fighting for','影響力在').replaceText('and prove you are a true patriot','證明你有多愛國').replaceText('Fought for the country of citizenship','為自己的國家戰鬥');
        $("ul#achievment > li:eq(11) > .hinter > span > p:eq(1) > small").text("為你所在的國籍戰鬥，你可以在愛國者查看目前累積的影響力");
	// military skill
	$(".citizen_content > h3:contains('Military Skills')").html('<br><br><br><br><br>軍事技能');
	$('.citizen_content > .citizen_military:eq(0) > strong:first').text('力量');
	$('.citizen_content > .citizen_military:eq(0) > div > small:first').replaceText('Super soldier:','超級大兵:');
	$('.citizen_content > .citizen_military:eq(1) > strong:first').text('軍階');
	$('.citizen_content > .citizen_military:eq(1) > div > small:first').text('軍階點數:');

if ($('.citizen_content h3:eq(4)').find('True Patriot history')) {
        $('.citizen_content h3:eq(4)').replaceText('True Patriot history','愛國者紀錄');
        $('.citizen_content h3:contains(True Patriot)').html('愛國者<img class="tips" alt="" style="position:relative;bottom:-2px;right:-2px;" src="http://www.erepublik.com/images/modules/_icons/small_info_icon.png" original-title="此影響力累積會因國籍轉換而歸零">');
	$('.citizen_content > .citizen_military:eq(2) > strong:first').text('影響力');
        $(".citizen_content > .citizen_military:eq(2) > div > small:contains('Progress:')").text('目前累積')
        $(".citizen_content > .citizen_military:eq(3) > div > small:contains('Progress:')").text('總共累積')
        $("#content > div.citizen_content > div.stat > strong:contains('Reach level 15 to enable your True Patriot progress')").text('到達15等級才可解鎖此區');

	$(".citizen_content > h3:contains('Top damage in a campaign')") .html('最高輸出戰役<img class="tips" alt="" style="position:relative;bottom:-2px;right:-2px;" src="http://www.erepublik.com/images/modules/_icons/small_info_icon.png" original-title="當戰役結束後才會結算">');
	$('.citizen_content > .citizen_military:eq(3) > strong:first').text('影響力');
	$('.citizen_content > .citizen_military:eq(4) > strong:first').text('影響力');
	$(".citizen_content > .citizen_military:eq(3) > .stat > small:contains('Achieved while')").replaceText('Achieved while successfully defending','達成此紀錄在').replaceText('against','面對').replaceText(' on ',' 於 ').replaceText('Achieved while trying to conquer','達成此紀錄在').replaceText('from','面對').replaceText('Achieved while successfully conquering','達成此紀錄在');
        $(".citizen_content > .citizen_military:eq(4) > .stat > small:contains('Achieved while')").replaceText('Achieved while successfully defending','達成此紀錄在').replaceText('against','面對').replaceText(' on ',' 於 ').replaceText('Achieved while trying to conquer','達成此紀錄在').replaceText('from','面對').replaceText('Achieved while successfully conquering','達成此紀錄在');
} else {

        //True Patriot
        $('.citizen_content h3:contains(True Patriot)').html('愛國者<img class="tips" alt="" style="position:relative;bottom:-2px;right:-2px;" src="http://www.erepublik.com/images/modules/_icons/small_info_icon.png" original-title="此影響力累積會因國籍轉換而歸零">');
	$('.citizen_content > .citizen_military:eq(2) > strong:first').text('影響力');
        $(".citizen_content > .citizen_military:eq(2) > div > small:contains('Progress:')").text('目前累積')
        $("#content > div.citizen_content > div.stat > strong:contains('Reach level 15 to enable your True Patriot progress')").text('到達15等級才可解鎖此區');
        // Top damage
	$(".citizen_content > h3:contains('Top damage in a campaign')") .html('最高輸出戰役<img class="tips" alt="" style="position:relative;bottom:-2px;right:-2px;" src="http://www.erepublik.com/images/modules/_icons/small_info_icon.png" original-title="當戰役結束後才會結算">');
	$('.citizen_content > .citizen_military:eq(3) > strong:first').text('影響力');
	$(".citizen_content > .citizen_military:eq(2) > .stat > small:contains('Achieved while')").replaceText('Achieved while successfully defending','達成此紀錄在').replaceText('against','面對').replaceText(' on ',' 於 ').replaceText('Achieved while trying to conquer','達成此紀錄在').replaceText('from','面對').replaceText('Achieved while successfully conquering','達成此紀錄在');
        $(".citizen_content > .citizen_military:eq(3) > .stat > small:contains('Achieved while')").replaceText('Achieved while successfully defending','達成此紀錄在').replaceText('against','面對').replaceText(' on ',' 於 ').replaceText('Achieved while trying to conquer','達成此紀錄在').replaceText('from','面對').replaceText('Achieved while successfully conquering','達成此紀錄在');
        $("#content > div.citizen_content > div.stat > strong:contains('Reach level 15 to enable your top damage in a campaign')").text('到達15等級才可解鎖此區');
};
	if (document.location.toString().indexOf("/economy/")!==-1) {
		if (document.location.toString().indexOf("/donate-")!==-1) {
			// donate tab
			$('.citizen_content > div > h2.special.padded').replaceText('Donate','捐贈');
			$('.citizen_content > div > h2.special.padded > img#donate_tip').attr('title','只有 食物, 武器 和 機票 能被捐贈.');
			$('.citizen_content > div > ul.tabs > li#topratedtab > a > span').text('物資');
			$('.citizen_content > div > ul.tabs > li#latesttab > a > span').text('金錢');
			$(".citizen_content > div > .donate_form > table > tbody > tr > th:contains('Your storage')").text('你的個人倉庫');
			$(".citizen_content > div > table > tbody > tr > th:contains('Your account')").text('你的現金帳戶');
			$(".citizen_content input[value='Donate']").attr('value','捐贈');
}
	} else if (document.location.toString().indexOf("/citizen-friends/")!==-1) {
		// friend tab
		$("table.warning_message > tbody > tr > td:contains('Only your first 2000 friends will see your wall posts.')").text('只有前 2000 位好友能看到你發佈在公民塗鴉牆上的訊息.');
		$("table.success_message > tbody > tr > td:contains('Your friendship request has been sent.')").text('你的好友邀請已經送出.');
		$('div#friends_tab_content div.dead').text('死亡');
	} else if (document.location.toString().indexOf("/change-password")!==-1) {
		// change password tab
		$('.citizen_sidebar > div > .citizen_second > small:eq(2)').replaceText('Forfeit points','違規點數');
		$('.citizen_content > .holder > h2.special.borderedsep').text('更改密碼');
		$("form.changepassword span.fieldname.goleft:contains('Current password')").text('目前密碼');
		$('form.changepassword span#error_for_citizen_password_twin.twin-small').text('請輸入你舊的密碼.')
		$("form.changepassword span.fieldname.goleft:exact('New password')").text('新密碼');
		$("form.changepassword span.fieldname.goleft:exact('New password again')").text('確認新密碼');
		$('form.changepassword > div > input.arrowbutton').attr('value','確定更改');
	} else if (document.location.toString().indexOf("/edit/profile")!==-1) {
		// editor tab
		$('.citizen_content > .holder > h2.special.borderedsep').text('編輯個人資料');
		$("form.editprofile span.fieldname.goleft:contains('Your description')").text('關於你');
		$("form.editprofile span.fieldname.goleft:contains('Citizen Avatar')").text('個人頭像');
		$('form.editprofile span#error_for_citizen_file_twin.twin-small').html('僅允許副檔名為 <strong>.jpeg</strong> 的圖像上傳.');
		$("form.editprofile span.fieldname.goleft:contains('Your birthday')").text('你的生日');
		$("form.editprofile span.fieldname.goleft:contains('Your email here')").text('你的電子郵件信箱');
		$('form.editprofile span#error_for_citizen_email_twin.twin-small').text('認證需要使用你的電子郵件信箱, 所以請勿隨意亂填.');
		$("form.editprofile span.fieldname.goleft:contains('Your password')").text('你的密碼');
		$('form.editprofile span#error_for_password_twin.twin-small').text('如果確定更改個人資料, 請輸入你目前的密碼.');
		$('form.editprofile > .largepadded > input.arrowbutton').attr('value','確定更改');
		$('.citizen_content > div > a.dotted.change_password').text('更改密碼');
	};
};
if (document.location.toString().indexOf("/citizenship")!==-1) {
	$('h1').css('font-family','微軟正黑體,微软雅黑');
	// citizenship request
	$('h1:first').text('國藉申請');
	$("table.info_message > tbody > tr > td:contains('You are not be able to request a new citizenship while being a congress member')").text('由於你目前是國會議員, 所以不能提出國藉申請.');
	$("table.info_message > tbody > tr > td:contains('You are not be able to request a new citizenship while being a party member')").text('由於你目前是政黨成員, 所以不能提出國藉申請.');
};
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 領域 economy.erepublik.com/en/economy/myCompanies
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
        $('h1').css('font-family','微軟正黑體,微软雅黑');
        $('.top_tabs li:eq(0)') .find('a.companies') .attr("original-title","公司");
        $('.top_tabs li:eq(1)') .find('a.training_grounds') .attr("original-title","訓練場所");
        $('.top_tabs li:eq(2)') .find('a.storage') .attr("original-title","倉庫");
        $('.top_tabs li:eq(3)') .find('a.health_buildings') .attr("original-title","體力額房屋");
        $('.manager_dashboard .list .area .listing_holder .heading .area_controls strong') .replaceText('Companies','公司') .replaceText('Training Grounds','訓練場') .replaceText('Employees','雇員名單');
        $('.manager_dashboard .list .area .listing_holder .heading .area_options strong') .replaceText('Work as Manager','經理人工作') .replaceText('days work presence','天工作狀態') .replaceText('Train','訓練');
        $('.manager_dashboard .list .area .listing_holder .heading .employees_controls strong') .replaceText('Employees','雇員人頭');
        $('.manager_dashboard .list .area .listing_holder .heading .area_raw strong') .replaceText('Raw materials','原料') .replaceText('Cost','花費');
        $('.manager_dashboard .list .area .listing_holder .heading .area_final_products strong') .replaceText('Final products','成品') .replaceText('Salary','薪資') .replaceText('Strength','提升力量');
        $('.manager_dashboard .list .area .bottom_details > .required_health > em') .replaceText('Health','體力');

	if (document.location.toString().indexOf("/economy/myCompanies")!==-1) {	
        // Companies
        $(".manager_dashboard .list .area .bottom_details .employees_available strong[title='have that many employees to assign']") .attr('title','你沒有足夠的上工數可供使用'); 
        $(".manager_dashboard .grey_plastic.left_pos[title='Create new company']") .attr("title","購買公司");
        $(".manager_dashboard .grey_plastic.mid[title='Sell/Disolve companies']") .attr("title","販賣/拆除公司");
        $('.manager_dashboard .list .area .listing_holder .notice.gored strong') .text('選擇你要拆除或販賣的公司');
        $(".manager_dashboard .grey_plastic.right_pos[title='Upgrade/Downgrade companies']") .attr("title","升級公司");
        $('.manager_dashboard .list .area .listing_holder .notice.gogreen strong') .text('選擇你要升級的公司');
        $(".manager_dashboard .list .area .listing_holder .heading .employees_controls .grey_plastic[title='Manage employees']") .attr("title","管理雇員");
        $(".manager_dashboard .list .area .listing_holder .heading .area_raw .grey_plastic[title='Marketplace']") .attr("title","商品市場");
        $('.manager_dashboard .list .employer .employer_info div strong').text('你還沒有工作');
        $('.manager_dashboard > .list > div.fill') .find("h4:contains('Employer')") .replaceText('Employer','雇主'); 
        $('.manager_dashboard .list .employer .employer_info div a.grey_med') .replaceText('Resign','辭職');
        $('.manager_dashboard .list .employer .required_health em, .manager_dashboard .list .employer .employer_salary em') .replaceText('Health','體力') .replaceText('Gross Salary','薪水') .replaceText('Income Tax','扣稅');
        $('.manager_dashboard .green_enlarged span').replaceText('Work','工作');
        $('.manager_dashboard .green_enlarged span').replaceText('Get a job','找工作');
        $('.manager_dashboard .list > div.area') .find("h4:contains('My companies')") .replaceText('My companies','我的公司');
        $(".manager_dashboard .list .area .green_enlarged[title='Start production']") .attr('title','開始工作');
        $('.manager_dashboard .list > div.area > h4') .find("a:contains('How to manage your companies')") .replaceText('How to manage your companies','如何經營你的公司');
        $('.manager_dashboard .list h4 a.helper') .attr('title','學習如何經營你的公司');
        $('.manager_dashboard .list .area .bottom_details > .employees_available > em') .replaceText('Employees assigned','雇員人頭');
        $('.manager_dashboard .list .area .bottom_details > .raw_materials > em') .replaceText('Raw materials','原料');
        $('.tutorial_pop h1') .replaceText('How to manage your companies','如何經營你的公司');
function learncompanies() {
        $('.tutorial_pop > h2 > span#tut_subtitle') .replaceText('Choose the companies in which you want to work as manager','選擇你要工作的經理人頭') .replaceText('Check how many of your employees came to work so far','檢查目前有多少人工作') .replaceText('Assign them to your companies','將人頭分配到你的公司') .replaceText(" When you are happy with your management decisions,","分配完人頭後,開始進行生產！").replaceText('Start Production!',' ');
        $('.tutorial_pop > small > span') .replaceText("Don't worry about your current health. If necessary, you will be eating food automatically. Just make sure you have enough food in inventory and enough health left to recover.",'不用擔心體力上限的問題 系統將會從你的體力餘額扣除');
        $('.tutorial_pop > small > span') .replaceText("The employees are no longer working in a specific company, but they work for the manager. They come to work and get their salary paid, but they are not producing anything until you decide where to use them.",'當雇員上工後會扣除薪資，你可以自行決定讓他使用在任一廠');
        $('.tutorial_pop > small > span') .replaceText("Each company type can support a limited number of employees. Upgrading companies or buying better raw materials companies can increase the number of employees you can hire an assign.",'工廠在一日內能讓雇員工作的數量有限，等級越高的公司能雇用的數量越多');
        $('.tutorial_pop > small > span') .replaceText("You can start production as many times you want during a day as long as you still have unassigned employees or companies you didn't work in as a manager yet. However, it will be easier for you to start production only once a day.",'如果雇員上工時間分散，你可以分數次生產也沒關係');
        $('.tutorial_pop > .main > span') .text('下一步');
        window.setTimeout(learncompanies, 500);
            };
        window.setTimeout(learncompanies, 500);
        $('.solid_pop .inner .message > div.text > h4.food_warning') .replaceText('Not enough food to eat in order to recover health','食物不足');
        $('.solid_pop .inner .message > div.text > h4.health_warning') .replaceText('Health limit exceeded','超過回復體力上限');
        $('.solid_pop .inner .message > div.text > h4.storage_warning') .replaceText('Storage limit exceeded','倉庫已滿');
        $('.solid_pop .inner .message > div.text > h4.works_warning') .replaceText('Too many employees assigned','指派員工數超過可用員工數');
        $('.solid_pop .inner .message > div.text > h4.raw_warning') .replaceText('Not enough raw materials','原料不足');
        $('.solid_pop .inner .message > div.text > h4.food_raw_warning') .replaceText('Not enough food raw materials','食物原料不足');
        $('.solid_pop .inner .message > div.text > h4.weapon_raw_warning') .replaceText('Not enough weapon raw materials','武器原料不足');
        $('.solid_pop .inner .message > div.text > h4.money_warning') .replaceText('Not enough money to pay your salary','老闆現金不夠付你薪水');
        $('.solid_pop .inner .message > div.text > h4.work_limit_warning') .replaceText('Your employer cannot receive any more employees today','雇主今天不能再雇用更多員工');
        $('.solid_pop .inner .message > div.text > h4.nothing_selected') .replaceText("No employees or work as manager assigned, nothing to produce",'沒有指派工作，沒有任何產品');
        $('.solid_pop a:eq(1) span') .text('去購買原料');
        $('.solid_pop a:eq(2) span') .text('去購買原料');
        $('.solid_pop a:eq(3) span') .text('去購買原料');
        $('.solid_pop a:eq(4) span') .text('興建更多倉庫');
        $('.solid_pop a:eq(5) span') .html('<img alt="" src="http://www.erepublik.com/images/modules/manager/food.png">去購買原料');
        $('.solid_pop a:eq(6) span') .text('辭職');
        $('.solid_pop a.close_pop_up span') .text('取消');
        $('.manager_dashboard .green_enlarged span') .replaceText('Start production','開始工作');
	};

        if (document.location.toString().indexOf("/economy/manage-employees/")!==-1) {
        //Companies > Manage employees
        $(".manager_dashboard .grey_plastic.left_pos[title='Add job offer']") .attr("title","招募員工");
        $(".manager_dashboard .grey_plastic.right_pos[title='Fire employees']") .attr("title","開除員工");
        $(".manager_dashboard .list .area .listing_holder .heading .area_final_products .grey_plastic[title='Edit salaries']") .attr("title","調整薪資");
        $('.manager_dashboard .list h4') .replaceText('My Companies » Manage employees','公司管理');
        $('.manager_dashboard .list .area.employees .active_offers .c12 strong > span') .replaceText('No','無');
        $('.manager_dashboard .list .area.employees .active_offers .c12 strong') .replaceText('active job offers','提供工作機會') .replaceText('active job offer','提供工作機會');
        $('.manager_dashboard .list .area.employees .bottom_details > .employees > em') .text('雇員');
        $('.manager_dashboard .list .area.employees .bottom_details > .work_presence > em') .text('出席率');
        $('.manager_dashboard .list .area.employees .bottom_details > .total_dues > em') .text('總花費薪資');
        };

        if (document.location.toString().indexOf("/economy/training-grounds")!==-1) {
        //Training grounds
        $('.manager_dashboard .list h4') .replaceText('Training grounds','訓練場所');
        $(".manager_dashboard .grey_plastic.left_pos[title='Build new training ground']") .attr("title","蓋更多訓練場");
        $(".manager_dashboard .grey_plastic.right_pos[title='Upgrade/Downgrade training centers']") .attr("title","升級/降級訓練場");
        $('.manager_dashboard .list .area .listing_holder .notice.gogreen strong') .text('選擇一棟訓練場');
        $(".manager_dashboard .list .area .green_enlarged[title='Train']") .attr('title','開始訓練');
        $('.manager_dashboard .list .area .bottom_details .gold_cost.min em') .replaceText('Gold','總花費金額');
        $('.manager_dashboard .green_enlarged span') .replaceText('Train','訓練');
        };
  
        if (document.location.toString().indexOf("/economy/health-expansions")!==-1) {
        //Health buildings
        $('.manager_dashboard .list h4') .replaceText('Health buildings','體力額房屋');
        $(".manager_dashboard .grey_plastic.left_pos[title='Buy Health Buildings']") .attr("title","購買房屋");
        $(".manager_dashboard .grey_plastic.right_pos[title='Upgrade Town Hall']") .attr("title","升級城鎮中心");
        $('.manager_dashboard .list .area .listing_holder .heading .area_controls strong') .replaceText('Health buildings','體力額房屋');
        $('.manager_dashboard .list .area .listing_holder .heading .area_options strong') .replaceText('Health Bonus','體力加成');
        $('.manager_dashboard .list .area .bottom_details .required_health.min em') .replaceText('Total max. health','回復體力上限');
        };
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
	// 市場 economy.erepublik.com/en/market/
	//   - 二手 economy.erepublik.com/en/market/company/
	//   - 就業 economy.erepublik.com/en/market/job/
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
	if (document.location.toString().indexOf("/market/")!==-1) {
		$('h1').css('font-family','微軟正黑體,微软雅黑');
		$('h4').css('font-family','微軟正黑體,微软雅黑');
		// market
		$("#marketplace > h1:contains('Marketplace')").text('商品市場');
		$("#filters_expanded > h4:contains('Select product')").text('請選擇你要購買的產品類型');
		$(".product_selector > ul > li > a[title='Food'] > strong").text('食物');
		$(".product_selector > ul > li > a[title='Weapons'] > strong").text('武器');
		$(".product_selector > ul > li > a[title='Moving Tickets'] > strong").text('機票');
		$(".product_selector > ul > li > a[title='Food Raw Material'] > strong").text('食物原料');
		$(".product_selector > ul > li > a[title='Weapon Raw Material'] > strong").text('武器原料');
		$(".product_selector > ul > li > a[title='Hospital'] > strong").text('醫院');
		$(".product_selector > ul > li > a[title='Defense System'] > strong").text('防禦設施');
		$(".product_selector > ul > li.last > a > strong").text('二手公司');
		$("#filters_expanded > #minReq > h4:contains('Select quality')").text('請選擇你要購買的等級');
		$("#filters_summary > .sactual > .sattr > small:exact('Health restore')").text('可恢復體力值');
		$("#filters_summary > .sactual > .sattr > small:exact('Fire Power')").text('火力');
		$("#filters_summary > .sactual > .sattr > small:exact('Durability')").text('耐久度');
		$("#filters_summary > .sactual > .sattr > small:exact('Moving Distance')").text('移動距離');
		$("#filters_summary > .sactual > .sattr > small:exact('Uses/Player')").text("次數/每個玩家");
		$("#filters_summary > .sactual > .sattr > small:exact('Defense Budget')").text("防禦輸出");
		$("#filters_summary > .sactual > .sattr > div > span.solid.health > strong:exact('/ use')").text('/ 每次');
		$("#filters_summary > .sactual > .sattr > div > span.solid.health > strong:exact('/ day')").text('/ 每天');
		$("#filters_summary > .sactual > .sattr > div > span.solid.durability > strong:exact(' uses')").text(' 次');
		$('#filters_summary > .sactual > .sattr > div > span.solid.durability > strong:exact("use(s)")').text('次');
		$('#filters_summary > .sactual > .sattr > div > span.solid.durability > strong:exact("day(s)")').text('天');
		$('#filters_summary > .sactual > .sattr > div > span.solid.moving_distance > strong:exact("zone(s)")').text('區域');
		$("#filters_summary > .sactual > .schange > a > span:contains('Change')").text('更改');
		$("#marketplace > table > thead > tr.m_mainh > th.m_product:contains('Product')").text('產品');
		$('#marketplace > table > thead > tr.m_mainh > th.m_provider').text('供應商');
		$('#marketplace > table > thead > tr.m_mainh > th.m_stock').text('庫存');
		$("#marketplace > table > thead > tr.m_mainh > th.m_price > a[title='Price']").text('價格');
		$('#marketplace > table > thead > tr.m_mainh > th.m_quantity').text('數量');
		$('#marketplace > table > tbody > tr > td.m_buy > a > span').text('購買');
		$("table.info_message > tbody > tr > td:contains('There are no market offers matching you search.')").text('目前沒有販售中的產品.');
		if (document.location.toString().indexOf("/company/")!==-1) {
			// company market
			$("#marketplace > h1:contains('Companies for sale')").text("二手公司拍賣市場");
			$("#marketplace > div.companies_sale > h4:contains('Select company')").text('請選擇你要購買的公司類型');
			$("#marketplace > table > thead > tr.m_mainh > th.m_product:contains('Company')").text('公司名稱');
			$("table.error_message > tbody > tr > td:contains('You can not buy a company in a country for which you do not have citizenship.')").text('你不能購買不同國藉的二手公司.');
			$("table.info_message > tbody > tr > td:contains('There are no companies for sale matching you search.')").text('目前沒有販售中的二手公司');
		};
	};
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
	// 建造 economy.erepublik.com/en/company/create
	// 公司 economy.erepublik.com/en/company/
	//   - 編輯 economy.erepublik.com/en/company/edit/
	//   - 拍賣 economy.erepublik.com/en/company/sell/
	//   - 雇員 economy.erepublik.com/en/company/employees/
	//          economy.erepublik.com/en/company/job-offers/
	//   - 更改 economy.erepublik.com/en/company/migrate/
	//   - 升級 economy.erepublik.com/en/company/customize/
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
        
        if (document.location.toString().indexOf("/company/create")!==-1) {
        //create company
        $('#content > h1') .text('建造');
        $('.create_building h3') .replaceText('Select building type','選擇興建的類別') .replaceText('Select building','選擇興建的建築');
        $('.create_building .create_links a.select_food').attr('title','食物原料廠');
        $('.create_building .create_links a.select_food span').text('食物原料廠');
        $('.create_building .create_links a.select_weapons').attr('title','武器原料廠');
        $('.create_building .create_links a.select_weapons span').text('武器原料廠');
        $('.create_building .create_links a.select_factories').attr('title','成品工廠');
        $('.create_building .create_links a.select_factories span').text('成品工廠');
        $('.create_building .create_links a.select_storage').attr('title','倉庫');
        $('.create_building .create_links a.select_storage span').text('倉庫');
        $('.create_building .create_links a.select_train').attr('title','訓練場所');
        $('.create_building .create_links a.select_train span').text('訓練場所');
        $('.create_building ul.extended li:eq(0) a strong').text('穀物農場');
        $('.create_building ul.extended li:eq(1) a strong').text('果園');
        $('.create_building ul.extended li:eq(2) a strong').text('漁塭');
        $('.create_building ul.extended li:eq(3) a strong').text('畜牧場');
        $('.create_building ul.extended li:eq(4) a strong').text('狩獵場');
        $('.create_building ul.extended li:eq(5) a strong').text('鐵礦場');
        $('.create_building ul.extended li:eq(6) a strong').text('原油場');
        $('.create_building ul.extended li:eq(7) a strong').text('鋁礦場');
        $('.create_building ul.extended li:eq(8) a strong').text('硝石場');
        $('.create_building ul.extended li:eq(9) a strong').text('橡膠場');
        $('.create_building ul.extended li:eq(10) a strong').text('食物成品廠');
        $('.create_building ul.extended li:eq(11) a strong').text('武器成品廠');
        $('.create_building ul.extended li:eq(12) a strong').text('小倉庫');
        $('.create_building ul.extended li:eq(13) a strong').text('大倉庫');
        $('.create_building ul.extended li:eq(14) a strong').text('訓練場所');
        $('.create_building ul.extended li:eq(15) a strong').text('攀岩訓練');
        $('.create_building ul.extended li:eq(16) a strong').text('射擊訓練');
        $('.create_building ul.extended li:eq(17) a strong').text('特種訓練');
        };

        if (document.location.toString().indexOf("/company/sell/")!==-1) {
        //sell company
        $('.sell_company h2').text('販賣公司');
        $('.sell_company .selling_box strong').text('販售價');
        $('.sell_company table .fluid_blue_dark_medium span').text('販賣');
        $(".info_message td:exact('This building cannot be sold nor dissolved.')").text('系統贈送的公司無法販售或拆除');
        $(".info_message td:exact('Raw Material buildings cannot be sold.')").text('原料廠無法販售');
        $(".info_message td:exact('This company can be dissolved only after you reach Experience Level 25.')").text('你必須到達25等級才可拆除此原料廠');
        $('.sell_company .disolve_company h2').text('拆除公司');
        $('.sell_company .disolve_company p').replaceText('You can dissolve your company for','你拆除此公司可獲得');
        $('.sell_company div.disolve_company a.fluid_blue_light_medium').text('拆除此公司');
        };

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 外匯 www.erepublik.com/en/exchange
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if (document.location.toString().indexOf("/exchange")!==-1) {
	$('h1').css('font-family','微軟正黑體,微软雅黑');
	$("h1:contains('Monetary Market')").text('外匯市場');
	$(".e_cash > .exchange_bar > .switcher > strong[id='sell_flag'] > span").replaceText('Buy:','買入:');
	$(".e_cash > .exchange_bar > .switcher > a").attr('title', '交換');
	$(".e_cash > .exchange_bar > .switcher > strong[id='buy_flag'] > span").replaceText('Sell:','賣出:');
	$(".e_cash > .exchange_bar > .bar_actions > a[trigger='post_mine']").text('新增匯單');
        $(".e_cash > .exchange_bar > .bar_actions > a[trigger='all_offers']").text('所有匯單');
function exmoney() {
        $(".e_cash > .exchange_bar > .bar_actions > a[trigger='my_offers']").replaceText('My offers','我的匯單'); 
	$(".create_form > strong:eq(0)").text('數量:');
	$('.create_form > strong:eq(1)').text('匯率');
	$('.create_form > a.blue_action').text('下單');
	$('div.buy_mode > table.exchange_offers > thead > tr:first > th:eq(0)').text('所有匯單');
	$('div.buy_mode > table.exchange_offers > thead > tr:eq(1) > th:eq(0)').text('提供者');
	$('div.buy_mode > table.exchange_offers > thead > tr:eq(1) > th:eq(1)').text('總量');
	$('div.buy_mode > table.exchange_offers > thead > tr:eq(1) > th:eq(2)').text('匯率');
	$('div.buy_mode > table.exchange_offers > thead > tr:eq(1) > th:eq(3)').text('購買');
        $(".exchange_offers td.ex_buy button:contains('Buy')").text('買');
     window.setTimeout(exmoney,500);
};
window.setTimeout(exmoney,500);
	$(".edit_mode > .box").text('你還沒有下任何的外匯單');
	$('table.exchange_offers > thead > tr:first > th:eq(0)').text('我的匯單');
	$('table.exchange_offers > thead > tr:eq(1) > th:eq(0)').text('提供者');
	$('table.exchange_offers > thead > tr:eq(1) > th:eq(1)').text('總量');
	$('table.exchange_offers > thead > tr:eq(1) > th:eq(2)').text('匯率');
        $(".exchange_offers td.ex_buy button.gored:contains('Delete')").text('刪除');
        $(".exchange_offers td.ex_buy button:contains('Save')").text('確定');
        $('#populateOffers > #accept_form > #table_list_offers > tbody > tr:first').find('th:eq(4)').text('購買數量');
};
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 倉庫 www.erepublik.com/en/economy/inventory
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if (document.location.toString().indexOf("/economy/inventory")!==-1) {
	$('#inventory_overview span').css('font-family','微軟正黑體,微软雅黑');
	$('#inventory_overview > a > strong').css('font-family','微軟正黑體,微软雅黑');
	// storage
	$('.manager_dashboard .list .area.storage h4') .replaceText('Storage','個人倉庫');
        $('.manager_dashboard .list .area.storage h4 .grey_plastic') .attr("title","擴建倉庫");
	$('#inventory_overview > .items_holder > h4:eq(0)').text('產品');
	$('#inventory_overview > .items_holder > h4:eq(1)').text('資源');
	$('#inventory_overview > .items_holder > h4:eq(2)').text('收集品');
	$(".collection_list > ul > li:[title='Barrel']").attr('title','槍管');
	$(".collection_list > ul > li:[title='Scope']").attr('title','瞄準器');
	$(".collection_list > ul > li:[title='M6A3 Rocket']").attr('title','M6A3 火箭');
	$(".collection_list > ul > li:[title='Trigger Kit']").attr('title','擊發裝置');
	$(".collection_list > ul > li:[title='Stock']").attr('title','槍托');
	$('.collection_list > a.assemble').text('組合');
	$('.collection_list > a.assemble').attr('title','組合');
	$('.collection_list > .bazooka > .details > strong').html('Bazoka 火箭筒'+
		'<img src="http://www.erepublik.com/images/modules/storage/info.png" alt="" class="storage_tooltip" original-title="你可以在戰場上發現這些收集品。戰鬥會隨機拿到其中的組件，你可以收集並組裝它。">');
	$('.collection_list > .bazooka > .details > small').text('只需一發即可擊殺對面敵人');
	$('.collection_list > .bazooka > .details > p:eq(0)').attr('title','耐久度');
	$('.collection_list > .bazooka > .details > p:eq(1)').attr('title','火力');
	$('.collection_list > .bazooka > .details > p:eq(1) > span').text('10000 / 每發');
	// control module
	$('#inventory_overview > a.inventory_sell > strong').text('販售');
	$('#inventory_overview > a.inventory_sell > small').text('將物品放到市場販售');
	$('#inventory_overview > a.inventory_buy > strong').text('購買');
	$('#inventory_overview > a.inventory_buy > small').text('從市場購買東西');
	$('#sell_offers th.offers_product > strong').text('產品');
	$('#sell_offers th.offers_quantity > strong').text('數量');
	$('#sell_offers th.offers_price > .relative > strong').text('價格 / 每個');
	$('#sell_offers th.offers_market > .relative > strong').text('市場');
	$('#sell_offers th.offers_market > .relative > small > a#buy_license').text('購買交易證');
	$('#sell_offers th.offers_action > a > span').text('確定販售');
	$('#sell_offers a.delete_offer').attr('title','取消');
	$('.buy_market_shell > a#buy_market_license > span').text('購買市場交易證');
	$('.buy_market_shell > a#select_buy_license_country > span#buy_license_country_name').text('請選擇一個國家');	
};
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 戰爭列表 www.erepublik.com/en/military/campaigns
//   - 起義 www.erepublik.com/en/wars/show/
//   - 事件 www.erepublik.com/en/main/news/military
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if ((document.location.toString().indexOf("/wars/")!==-1) || (document.location.toString().indexOf("/military/campaigns")!==-1)) {
	$('h1').css('font-family','微軟正黑體,微软雅黑');
	$('h2').css('font-family','微軟正黑體,微软雅黑');
	$('.nameholder > #CHT').css('font-family','微軟正黑體,微软雅黑');
	// war
        $('.info_message td') .replaceText('is not involved in any active battles','沒有進行中的戰役');
        $('#battle_listing') .find(".toggled:contains('Allies')") .html('<span class="arrow"></span>萌友的戰役');
        $('#battle_listing') .find(".toggled:contains('Campaigns')") .html('<span class="arrow"></span>其他進行的戰役');
	if (document.location.toString().indexOf("/wars/show/")!==-1) {
		// choose war and battlefiled
                $('body#war h1') .text('戰爭');
		var rCoun = document.title.toString().split("|")[1].split(" vs ")[0];
		$('.war_list_header > .country.left_side > div > h3.resistance').css('width','160px');
		$(".war_list_header > .country.left_side > div > h3:contains('Resistance Force')").html(rCoun+' <span id="CHT">反抗軍</span>');
		$('.war_list_header > .country.left_side > div > h3 > #CHT').css('font-family','微軟正黑體,微软雅黑');
		$('.war_list_header > .country > div > a').replaceText('allies','盟國').replaceText('no ','沒有');
		$('.war_list_header > .vs > small').replaceText('Still active','戰爭持續中');
		$('.listing > a.reversed > span').replaceText('Join','加入');
		$(".listing > a.join[title='Join Resistance'] > span").text('加入起義勢力');
		$(".listing > a.join[title='Join'] > span").text('加入');
		$('.listing > small').replaceText('started on','目前戰場開啟自: ');
		$(".listing.done > small:contains('Conquered by')").replaceText('Conquered by','佔領成功:');
		$(".listing.done > small:contains('Secured by')").replaceText('Secured by','防守成功:');
		$("table.info_message > tbody > tr > td:contains('This war is no longer active.')").text('這場戰爭已經結束.');
		$("table.warning_message > tbody > tr > td:contains('is about to attack.')").replaceText('is about to attack.','即將發動攻擊.');
	};
};

// 事件
if (document.location.toString().indexOf("/main/news/military")!==-1) {
$('body#media .citizen a').replaceText('A resistance has started in','一場起義開始於').replaceText('President of','').replaceText('proposed an alliance with','的總統簽署同盟案與').replaceText('no longer has a Natural Enemy','停止了NE世仇')
.replaceText('was secured by','占領國').replaceText('in the war versus Resistance force of','獲勝於起義戰中對抗').replaceText('made a donation to','捐贈案通過對象').replaceText('A congress donation to','議員提出捐贈案給')
.replaceText('was proposed','').replaceText('The alliance between','關於一個同盟案').replaceText('was rejected','遭到了否決').replaceText('has been proposed as Natural Enemy','提出了NE世仇').replaceText('A new citizen fee ','提出調整新人費')
.replaceText('was conquered by Resistance force of','於').replaceText('in the war versus','成功由起義戰中打敗了').replaceText('now has a new welcoming message for new citizens','修改了新人歡迎訊息').replaceText('A new minimum wage ','提出了調整最低工資')
.replaceText('stopped trading with','禁止貿易對').replaceText('was conquered by','被').replaceText('proposed a new welcome message for new citizens','提出修改新人歡迎訊息').replaceText('attacked','攻擊了').replaceText('was impeached','遭到了彈劾')
.replaceText('has declared','宣布對').replaceText('as a Natural Enemy','設為NE世仇').replaceText('proposed to stop the trade with','提出禁止貿易對').replaceText('is no longer a Natural Enemy for','停止NE世仇對')
.replaceText('The proposal for a congress donation to','關於捐贈案給').replaceText('signed an alliance with ','簽署同盟於').replaceText('A president impeachment against','總統彈劾案提出彈劾掉').replaceText('Taxes for Iron changed','調整了武器原料稅')
.replaceText('as new Natural Enemy proposal has','設為NE世仇的提案').replaceText('has a new minimum wage','調整了最低工資').replaceText('The proposal for a new income tax','調整所得稅的提案').replaceText('New taxes for Iron were proposed','提出了關於武器原料稅的法案')
.replaceText('The president impeachment proposal has','總統彈劾案').replaceText('A new income tax','提出了調整所得稅').replaceText('Taxes for Weapons changed','調整了武器稅').replaceText('now has a new income tax','調整了所得稅')
.replaceText('Taxes for Food changed','調整了食物稅').replaceText('New taxes for Food were proposed','提出了關於食物所得稅調整的提案').replaceText('New taxes for Weapons were proposed','提出了關於武器所得稅調整的提案')
.replaceText('signed a peace treaty with','簽署了和平條約於').replaceText('proposed a peace in the war against','提出了和平條約於').replaceText('proposed peace in the war against','提出了和平條約於')
.replaceText('Tax proposal of tax changes for Weapons','武器進口稅的提案').replaceText('The proposal for a new citizen fee','新人費調整').replaceText('were rejected','遭到了否決').replaceText('been rejected','遭到了否決')
.replaceText('No Natural Enemy law has been proposed.','提出了取消NE世仇的法案').replaceText('Tax proposal of tax changes for Iron','關於武器原料稅調整的法案').replaceText('The proposal for a minimum wage change','關於調整最低薪資的法案')
.replaceText('Tax proposal of tax changes for Food','關於食物稅的法案');
};

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 戰場/戰役
//   - 戰場 www.erepublik.com/en/military/battlefield/
//   - 戰役 www.erepublik.com/en/military/campaigns
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if (document.location.toString().indexOf("/military/")!==-1) {
	if (document.location.toString().indexOf("/military/battlefield/")!==-1) {
		$('#pvp_header > .battle_hero.left_side').attr('title','我們的 戰鬥英雄');
		$('#pvp_header > .domination > .domibar > #left_points').attr('title','國家分數');
		$('#pvp_header > .domination > .domibar > #right_points').attr('title','敵人的 國家分數');
		$('#pvp_header > .battle_hero.right_side').attr('title','敵人的 戰鬥英雄');
		$.each( $("#pvp_header > .country > div > h3:contains('Resistance Force')"), function() {
			$(this).html($(this).replaceText('Resistance Force Of ','').text()+' <span id="CHT">反抗軍</span>');});
		$('#pvp_header > .country > div > h3 > #CHT').css('font-family','微軟正黑體,微软雅黑');
		$('#pvp_header > .country > div > a').replaceText('allies','盟國').replaceText('no ','沒有');
		$('#pvp_battle_area > table.damage_aligner > tbody > tr > td > #total_damage').attr('title','我目前累計的戰場影響力.');
		$('#pvp_battle_area > table.damage_aligner > tbody > tr > td > #total_damage > small').text('我的戰場影響力');
		$('#pvp_battle_area > .player.left_side > a#change_weapon').attr('title','更換武器');
		$('#pvp_actions > .action_holder > a#fight_btn').text('戰鬥');
		$('#pvp_actions > .action_holder > a#fight_btn').attr('title','戰鬥!');
		$('#pvp > a#go_stats.battle_stats_button').attr('title','戰場統計');
		$('#pvp > a.help_button').attr('title','開啟幫助視窗');
                $('#pvp > a.go_enemy_defeated').attr('title','開啟輸出統計');
		$('.battle_stats > .top > h3:first').text('戰役統計');
		$('.battle_stats > .repeat > .content > .lister > .head > .one').text('公民');
		$('.battle_stats > .repeat > .content > .lister > .head > .two').text('擊倒數');
		$('.battle_stats > .repeat > .content > .lister > .head > .three').text('戰場影響力');
		// defeated-pop-box
		$('#enemy_defeated > .heading > h2').text('擊倒敵人');
		$('#enemy_defeated > .content > div:eq(0) > strong').text('戰場影響力');
		$('#enemy_defeated > .content > div#natural_enemy_bonus > strong').text('世仇戰場獎勵');
		$('#enemy_defeated > .content > div:eq(2) > strong').text('軍階點數');
		$('#enemy_defeated > .content > div:eq(3) > strong').text('經驗值');
		$('#enemy_defeated > a#add_damage_btn').text('增加戰場影響力');
                $('#enemy_defeated > #popDecide').html('<input id="showInfluencePop" type="checkbox" value="false" name="showInfluencePop">'+'下次不再顯示');
		// rank-up-pop-box
		$('#rank_up > .heading > p').text('恭喜, 你的軍階提升到');
		$('#rank_up > .content > div:eq(0) > strong').text('軍階獎勵加成');
		$('#rank_up > .content > div:eq(1) > strong').text('+1 能量棒');
		$('#rank_up > a#add_rank_btn').text('領取獎勵');
		// other-box
		$('#battle_loader > a.green_go').replaceText('Next battle','下場戰局');
		$('#battle_end > a.green_go').text('查看其它戰役');
		$('#collection_complete.bazooka_pop > strong').text('恭喜, 完成Bazooka火箭筒的收集!');
		$("#collection_complete.bazooka_pop > a[title='Build your Bazooka']").text('組合');
		$("#timer > div > strong:contains('Are you')").text('你還在嗎?');
		$("#timer > div > a > span:contains('still here')").text('沒錯, 被你猜對了');
		// change location
		$('#options_box > p.info').text('你需要移動至其中一個國家, 才能參與這場戰鬥. 是否決定現在就出發呢?');
		$('#options_box > a#change_location.fluid_blue_dark > span').text('移動所在地');
		$('#options_box > a#nope.plain').text('不用了, 謝謝.');
                $('.change_residence > #go_there > #location_options > .current_location > h4').replaceText('Current location','目前所在的位置');
                $('.change_residence > #go_there > #location_options > .new__location > h4').replaceText('New Location','想移動到的位置');
                $('.change_residence > #go_there > #location_options > .new__location > #selects > small:eq(0)').replaceText('Moving distance:','移動距離');
                $('.change_residence > #go_there > #location_options > .new__location > #selects > small:eq(1)').replaceText('Travelling cost:','移動花費');
                $('.change_residence > #go_there > #location_options > .fluid_blue_dark_medium > span').text('移動');
	} else if (document.location.toString().indexOf("/military/campaigns")!==-1) {
		$('h1').css('font-family','微軟正黑體,微软雅黑');
		// Military campaigns list
		$('h1:first').text('戰役列表');
		$("#battle_listing > h4:exact('Campaign of the day')").text('本日戰役');
		$("#battle_listing > h4:contains('Allies')").text('目前 同盟國 的戰役');
		$("#battle_listing > h4:contains('Campaigns')").text('目前 '+$("#battle_listing > h4:contains('Campaigns')").replaceText('Campaigns','的戰役').text());
		$('#battle_listing a.victory_flag').text('勝利');
		$("#battle_listing span:contains('Fight')").text('戰鬥');
		$("#battle_listing span:contains('Victory')").text('勝利　');
	};
};
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 新聞 www.erepublik.com/en/news
// 熱門 www.erepublik.com/en/news/rated/all/
// 即時 www.erepublik.com/en/news/latest/all/
// 訂閱 www.erepublik.com/en/news/subscriptions
// 國際 www.erepublik.com/en/news/international
// 事件 www.erepublik.com/en/news/military
//   - 文章 www.erepublik.com/en/article/
//   - 報紙 www.erepublik.com/en/newspaper/
//   - 編輯 www.erepublik.com/en/edit-newspaper/
//   - 修文 www.erepublik.com/en/edit-article/
//   - 寫文 www.erepublik.com/en/write-article
//   - 創立 www.erepublik.com/en/create-newspaper
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if (document.location.toString().indexOf("/news/")!==-1) {
	$('body#media h1').css('font-family','微軟正黑體,微软雅黑');
	$('body#media h2').css('font-family','微軟正黑體,微软雅黑');
	// news area
	$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(0) > a').attr('title','新人指導及教育');
	$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(1) > a').attr('title','軍事命令以及訊息');
	$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(2) > a').attr('title','戰略分析');
	$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(3) > a').attr('title','政治論壇及分析');
	$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(4) > a').attr('title','經濟焦點');
	$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(5) > a').attr('title','社交娛樂');
	$('#filters > .rightfilters > .core > .your_subs').html('</br>你目前訂閱<strong>'+$("#filters > .rightfilters > .core > .your_subs > strong").text()+'</strong>份報紙<a href="javascript:;" class="fluid_blue_dark" onclick="$j(\'.asubs\').toggle();" title=""><span>變更</span></a>');
        $('#filters > .rightfilters > .asubs > .acontrols > a.fluid_blue_dark > span').text('解除訂閱');
	$('#filters > .rightfilters > .asubs > .acontrols > a.aselectall').text('選擇全部');
	$('#domain_selector_holder > div > .core > div > div > h2.goleft.big:first').text('請選擇新聞類型');
	$('#domain_selector_holder > div > .core > ul > .last:eq(0)').html('<a href=\"/en/news/rated/all/Republic-of-China-Taiwan/1\"><img class="icon" src="/images/parts/icon_media_toprated.gif" alt="Icon_media_toprated"> 熱門新聞</a>');
	$('#domain_selector_holder > div > .core > ul > .last:eq(1)').html('<a href=\"/en/news/latest/all/Republic-of-China-Taiwan/1\"><img class="icon" src="/images/parts/icon_media_latest.gif" alt="Icon_media_latest"> 最新報紙</a>');
	$('#domain_selector_holder > div > .core > ul > .last:eq(2)').html('<a href=\"http://www.erepublik.com/en/news/military\"><img class="icon" src="/images/parts/icon_media_military.gif" alt="Icon_media_military"> 最新事件</a>');
	$('#domain_selector_holder > div > .core > ul > .last:eq(3)').html('<a href=\"http://www.erepublik.com/en/news/international\"><img class="icon" src="/images/parts/icon_media_international.gif" alt="Icon_media_international"> 國際焦點</a>');
	$('#domain_selector_holder > div > .core > ul > .last:eq(4)').html('<a href=\"http://www.erepublik.com/en/news/subscriptions\"><img class="icon" src="/images/parts/icon_media_subscriptions.gif" alt="Icon_media_subscriptions"> 訂閱的報紙</a>');
	$('#country_holder > div > .core > div > div > h2.goleft.big:first').text('請選擇一個國家');
	// catalog link
	$("a:contains('First steps in eRepublik')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_1.png"> 新人指導及教育');
	$("a:contains('Battle orders')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_2.png"> 軍事命令以及訊息');
	$("a:contains('Warfare analysis')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_3.png"> 戰略分析');
	$("a:contains('Political debates and analysis')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_4.png"> 政治論壇及分析');
	$("a:contains('Financial business')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_5.png"> 經濟焦點');
	$("a:contains('Social interactions and entertainment')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_5.png"> 社交娛樂');
} else if ((document.location.toString().indexOf("/article/")!==-1) || (document.location.toString().indexOf("/newspaper/")!==-1)) {
        $('h2.new_spaper_section').text('關於本報社');	
        $(".new_spaper_head > .actions > .bolded:contains('Write article')").attr('title','寫新文章');
        $(".new_spaper_head > .actions > .bolded:contains('Unsubscribe')").attr('title','解除訂閱');
        $(".new_spaper_head > .actions > .bolded:contains('Subscribe')").attr('title','訂閱');
        $('.new_spaper_head > .actions > .single').attr('title','編輯詳情');
        $(".new_spaper_head > .actions > .bolded > span:contains('Write article')").text('寫新文章');
        $(".new_spaper_head > .actions > .bolded > span:contains('Unsubscribe')").text('解除訂閱');
        $(".new_spaper_head > .actions > .bolded > span:contains('Subscribe')").text('訂閱');
        $('.post > .post_info > .bolded > span').text('編輯');
        $('.post > .post_info > .red > span').text('刪除');
        $('.post > .post_content > a').text('看詳文 »');
        $('.post > .post_content > p.excerpt > a').text('看詳文 »');
        $('#subscribe_comments > .comment_form > .comment_add > p').text('留言');
        $('#subscribe_comments > .comment_form > .comment_add > input').attr('value','送出留言');
	$("a:contains('First steps in eRepublik')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_1.png"> 新人指導及教育');
	$("a:contains('Battle orders')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_2.png"> 軍事命令以及訊息');
	$("a:contains('Warfare analysis')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_3.png"> 戰略分析');
	$("a:contains('Political debates and analysis')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_4.png"> 政治論壇及分析');
	$("a:contains('Financial business')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_5.png"> 經濟焦點');
	$("a:contains('Social interactions and entertainment')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_5.png"> 社交娛樂');
	$('a.report.new_spaper').text('檢舉本報');
	$('a.report.articlereport').text('檢舉本文');
	$('a.shower.report.commentswitch').text('檢舉留言');
	$('a.report.onz.commentcontent').text('檢舉此留言');
        $('.new_spaper_head > .info > ul > li:eq(2) > a').text('查看排行');
        $('.new_spaper_head > .info > ul > li:eq(4) > a').text('wiki介紹');
} else if (document.location.toString().indexOf("/create-newspaper")!==-1) {
        $('form.companydetails > .largepadded > span#error_for_newspaper_name_twin').text('只允許6-25個字元.');
	$('.accountinfo > .accountdisplay > span.rightpadded').text('你的現金帳戶');
	$('form.companydetails > .largepadded > span.goleft > span#error_for_newspaper_image_twin').text('只允許上傳 JPG 圖檔.');
	$("form.companydetails > .largepadded > .fieldname:contains('Newspaper name')").text('報紙名稱');
	$("form.companydetails > .buttonalign > input.arrowbutton[name='commit']").attr('value','確定創立');
        $('.holder > h1').text('創立報社');
        $('.holder > a').text('查詢更多說明');
        $(".holder > h2:contains('Requirements')").text('創立要求');
        $(".holder > h2:contains('Newspaper details')").text('報社資訊');
        $('.holder > .goleft > p:eq(0)').replaceText('Level','等級');
        $('.holder > .goleft > p:eq(1)').replaceText('Cost','花費');
	$("form.companydetails > .largepadded > .fieldname:contains('Newspaper Avatar')").text('報社標誌');
} else if (document.location.toString().indexOf("/edit-newspaper/")!==-1) {
	$('.fieldname').css('font-family','微軟正黑體,微软雅黑');
	// edit newspaper
        $('.new_spaper_head > .actions > .bolded').attr('title','寫新文章');
        $('.new_spaper_head > .actions > .single').attr('title','編輯詳情');
        $(".new_spaper_head > .actions > .bolded > span:contains('Write article')").text('寫新文章');
	$('.accountinfo > .accountdisplay > span.rightpadded').text('你的現金帳戶');
	$("form.companydetails > .largepadded > .fieldname:contains('Newspaper name')").text('報紙名稱');
	$('form.companydetails > .largepadded > span#error_for_newspaper_name_twin').text('只允許6-25個字元.');
	$("form.companydetails > .largepadded > .fieldname:contains('Description')").text('關於本報');
	$("form.companydetails > .largepadded > .fieldname:contains('Newspaper logo')").text('報紙標誌');
	$('form.companydetails > .largepadded > span.goleft > span#error_for_newspaper_image_twin').text('只允許上傳 JPG 圖檔.');
	$("form.companydetails > .largepadded > .fieldname:contains('Cost')").text('花費');
	$('form.companydetails > .largepadded > span.accountdisplay > a.btnGetGold').text('購買黃金');
	$("form.companydetails > .buttonalign > input.arrowbutton[name='commit']").attr('value','確定更改');
} else if ((document.location.toString().indexOf("/edit-article/")!==-1) ||(document.location.toString().indexOf("/write-article")!==-1)) {
	$('h2').css('font-family','微軟正黑體,微软雅黑');
	$('.smallpadded').css('font-family','微軟正黑體,微软雅黑');
	// edit, write article
        $('.new_spaper_head > .actions > .bolded').attr('title','寫新文章');
        $('.new_spaper_head > .actions > .single').attr('title','編輯詳情');
        $(".new_spaper_head > .actions > .bolded > span:contains('Write article')").text('寫新文章');
	$(".holder > .bordersep > h2.goleft:contains('Edit article')").text('編輯文章');
	$(".holder > .bordersep > h2.goleft:contains('Write article')").text('寫新文章');
	$(".holder > .bordersep > a.btn-arrow-left.goright:exact('Back')").text('返回');
	$("form.writearticle > .inputholder > .smallpadded:contains('Title')").text('標題');
	$('form.writearticle > .inputholder > span#error_for_article_name_twin').text('只允許1-80個字元');
	$("form.writearticle > .inputholder > .smallpadded:contains('Article')").text('文章');
	$("table.info_message > tbody > tr > td:contains('By choosing a category which')").text('為你的文章內容選擇一個類別, 讓你的潛在讀者們更容易找到感興趣的文章.');
	$("form.writearticle > .inputholder > div.smallpadded:contains('Category')").text('內容分類');
	$("form.writearticle > .inputholder > select#article_category > option[value='0']").text('請選擇');
	$("form.writearticle > .inputholder > select#article_category > option[value='1']").text('- 新人指導及教育');
	$("form.writearticle > .inputholder > select#article_category > option[value='2']").text('- 軍事命令以及訊息');
	$("form.writearticle > .inputholder > select#article_category > option[value='3']").text('- 戰略分析');
	$("form.writearticle > .inputholder > select#article_category > option[value='4']").text('- 政治論壇及分析');
	$("form.writearticle > .inputholder > select#article_category > option[value='5']").text('- 經濟焦點');
	$("form.writearticle > .inputholder > select#article_category > option[value='6']").text('- 社交娛樂');
	$("form.writearticle > div > input.arrowbutton[value='Publish']").attr('value','發佈');
	$("form.writearticle > div > input.arrowbutton[value='Edit']").attr('value','編輯');
};
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 政黨 www.erepublik.com/en/party/
// 成員名單 www.erepublik.com/en/party-members/
// 主席名單 www.erepublik.com/en/party-candidates/
// 議員名單 www.erepublik.com/en/propose-congressman/
// 總統名單 www.erepublik.com/en/presidential-candidates/
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if (document.location.toString().indexOf("/party/")!==-1) {
	$('h2').css('font-family','微軟正黑體,微软雅黑');
	// party
	$("h2.section:contains('Info')").text('政黨資訊');
        $('a.smalldotted').replaceText('National rank','國家排行');
	$(".infoholder > .largepadded > span.field:exact('Members')").text('成員');
	$(".infoholder > .largepadded > span.field:exact('Orientation')").text('政黨傾向');
	$('.infoholder > .largepadded > span.goleft').replaceText('Center','中堅').replaceText('Libertarian','自由主義');
	$("h2.section:contains('Elections')").text('選舉');
	$('.indent > .bordersep:eq(0) > h2.section').html('<img title="每個月 15 號由黨員共同選出." class="icon padded tooltip" src="/images/parts/icon_position_politics_partypresident.gif" alt="Icon_position_politics_partypresident">黨主席選舉');
	$(".infoholder > p.smallholder:contains('Party President')").text('黨主席');
	var pp_1 = $(".indent > .bordersep:eq(0) > .subindent > .infoholder:eq(0) > p:first > .special:eq(0)").text();
	var pp_2 = $(".indent > .bordersep:eq(0) > .subindent > .infoholder:eq(0) > p:first > .special:eq(1)").text();
	$('.indent > .bordersep:eq(0) > .subindent > .infoholder:eq(0) > p:first').html('下次黨主席選舉於 <span class="special">'+pp_1+'</span> 後，目前有<span class="special">'+pp_2+'</span>位候選人.');
	$('.indent > .bordersep:eq(1) > h2.section').html('<img title="每個月 25 號由各地公民共同選出." class="icon padded tooltip" src="/images/parts/icon_position_politics_congressman.gif" alt="Icon_position_politics_congressman">議員選舉');
	var cm_1 = $('.indent > .bordersep:eq(1) > .subindent > .infoholder > .field > p > span.special:first').text();
	var cm_2 = $('.indent > .bordersep:eq(1) > .subindent > .infoholder > p > span.special:first').text();
	$('.indent > .bordersep:eq(1) > .subindent > .infoholder > .field > p:first').html('本黨目前有 <span class="special">'+cm_1+'</span> 位議員，');
	$('.indent > .bordersep:eq(1) > .subindent > .infoholder > p:first').html('約佔議會 <span class="special">'+cm_2+'</span> 的席次.');
	if ($('.indent > .bordersep:eq(2) > .subindent > .infoholder > p > span.special:first').length==1) {
		var cm_3 = $('.indent > .bordersep:eq(2) > .subindent > .infoholder > p > span.special:first').text();
		$('.indent > .bordersep:eq(2) > .subindent > .infoholder > p:first').html('下次議員選舉於 <span class="special">'+cm_3+'</span> 後.');
	} else {
		$('.indent > .bordersep:eq(2) > .subindent > .infoholder > p:first').html('國會議員選舉日.');
	};
	$('.indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > h2:first').text('參選議員');
	$('.indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > .holder').replaceText('Do you agree to represent your party in the congress election in','請問你是否同意, 代表你的政黨參選').replaceText('?',' 區的議員?');
	$('.indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > form > p.padded:first').text('請在下方填入你的政見連結, 來向選民們說明為何要投你一票.');
	$('.indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > form > p.largepadded > span:last').html('可以提供 外部網頁 或 <strong>私人論譠</strong> 的連結.');
	$(".indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > form > p.goright > span > span > input[value='Agree']").attr('value','同意');
	$(".indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > form > p.goright > span > span > input[value='Cancel']").attr('value','放棄');
	$('.indent > h2.section').html('<img title="每個月 5 號由全國公民共同選出." class="icon padded tooltip" src="/images/parts/icon_position_politics_president.gif" alt="Icon_position_politics_president">總統選舉');
	$(".indent > .subindent:eq(0) > .bordersep > .infoholder > p.smallholder:contains('Winner')").text('總統當選人');
	var cp_1 = $('.indent > .subindent:eq(1) > .infoholder > p:first > span.special:first').text();
	$('.indent > .subindent:eq(1) > .infoholder > p:first').html('下次總統選舉於 <span class="special">'+cp_1+'</span> 後.');
	$(".indent > .subindent:eq(2) > .infoholder > p.smallholder:contains('No candidate proposed')").text('尚未提名總統候選人.');
	// control buttons
	$('a.report.party').text('檢舉政黨');
	$(".action a:exact('Show all members')").text('黨員名單');
	$(".action a:exact('Show results')").text('查看選舉結果');
	$(".action a:exact('Show candidate list')").text('查看候選人名單');
	$(".action a:exact('Show candidates list')").text("查看候選人名單");
	$(".action a:exact('Show proposed members of congress')").text('查看參選名單');
	$(".action a:contains('Join party')").text('加入此黨');
	$(".action a:contains('Resign')").text('離開此黨');
	$(".action a:exact('Run for congress')").text('參加議員選舉');
	$(".action a:exact('Retire')").text('退選');
	$(".action a:exact('Candidate')").text('參選');
	$(".action a:exact('Vote')").text("投票");
} else if ((document.location.toString().indexOf("/party-members/")!==-1) || (document.location.toString().indexOf("/party-candidates/")!==-1)) {
	$('h2').css('font-family','微軟正黑體,微软雅黑');
	$('p.smallholder').css('font-family','微軟正黑體,微软雅黑');
	// party members, candidates list
	$("h2.biggersection:contains('Party members')").text('黨員名單');
	$("h2.biggersection:contains('Party candidates')").text('黨主席候選人名單');
	$(".indent > .bordersep > p.smallholder:contains('Party Member')").replaceText('Party Member','政黨成員');
	$(".indent > .bordersep > p.smallholder:contains('Congress Member')").replaceText('Congress Member','國會議員');
	$(".indent > .bordersep > p.smallholder:contains('Party President')").replaceText('Party President','黨主席');
	$('.holder > .indent').replaceText('No candidates applied yet','目前尚未有候選人.');
	$('.holder > a.btn-arrow-left.goright').text('政黨頁面');
	$('a.report.party').text('檢舉政黨');
} else if (document.location.toString().indexOf("/propose-congressman/")!==-1) {
	$('h2').css('font-family','微軟正黑體,微软雅黑');
	// party congressman list
	$("h2.biggersection:contains('Congress member candidates')").text('國會議員參選名單');
	$('.infoalert > p:eq(0)').html('<strong>1.</strong> 政黨成員每月的 16 號到 23 號間，可以報名參選國會議員.');
	$('.infoalert > p:eq(1)').html('<strong>2.</strong> 黨主席可以在每月的 24 號，調整最終議員參選名單.');
	$('.infoalert > p:eq(2)').html('<strong>3.</strong> 每個政黨在每個區域，最多只能提名三名國會議員參選人.');
	$("select#region_list > option[value='0']").text('請選擇一個區域');
	$('.holder > .candidates > .list-title').replaceText('Official candidates','正式候選人');
	$('.holder > a.btn-arrow-left.goright').text('政黨頁面');
	$('a.report.party').text('檢舉政黨');
} else if (document.location.toString().indexOf("/presidential-candidates/")!==-1) {
	$('h1').css('font-family','微軟正黑體,微软雅黑');
	$('h2').css('font-family','微軟正黑體,微软雅黑');
	$('th').css('font-family','微軟正黑體,微软雅黑');
	// president candidates list
	$('body#elections h1:first').text('總統候選人名單');
	$('table.elections > tbody > tr:first > th:eq(0)').text('候選人');
	$('table.elections > tbody > tr:first > th:eq(1)').text('支持的政黨');
	$('table.elections > tbody > tr:first > th:eq(2)').text('國家目標');
	$('table.elections > tbody > tr > td.of_goals > .goal_setter > .nogoals > small').text('沒有設定任何目標');
	$("table.info_message > tbody > tr > td:contains('No candidates applied yet')").text('目前尚未有總統候選人.');
};
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
//選舉中心 www.erepublik.com/en/elections/
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if (document.location.toString().indexOf("/elections/")!==-1) {
	$('h1').css('font-family','微軟正黑體,微软雅黑');
	$('h2').css('font-family','微軟正黑體,微软雅黑');
	$('th').css('font-family','微軟正黑體,微软雅黑');
	// elections
	$('body#elections h1:first').text('選舉中心');
	$("#filters > .rightfilters > .core > .info > p.smallpadded > strong:exact('Next elections')").text('下次選舉');
	$("#filters > .rightfilters > .core > .info > p:last > strong:contains('Country President')").text('國家總統');
	$("#filters > .rightfilters > .core > .info > p:last > strong:contains('Party President')").text('政黨主席');
	$("#filters > .rightfilters > .core > .info > p:last > strong:contains('Congress')").text('國會議員');
	$("#country_filters > .extended-menus > .core > .bordersep > h2:contains('Country')").text('請選擇一個國家');
	$("#region_filters > .extended-menus > .core > .bordersep > h2:contains('Country')").text('請選擇一個地區');
	$("#region_filters > .extended-menus > .core > ul:first > li:first > a[id='0__All regions']").text('所有地區');
	$("#election_filters > .extended-menus > .core > .bordersep > h2:contains('Election')").text('請選擇選舉類型');
	$('#election_filters > .extended-menus > .core > ul.election_ul > li.last > table > tbody > tr > td > a#president').text('總統選舉');
	$('#election_filters > .extended-menus > .core > ul.election_ul > li.last > table > tbody > tr > td > a#congress').text('國會議員選舉');
	$('#election_filters > .extended-menus > .core > ul.election_ul > li.last > table > tbody > tr > td > a#party').text('黨主席選舉');
	$("#party_filters > .extended-menus > .core > .bordersep > h2:contains('Parties')").text('請選擇一個政黨');
	$("#dateSelect_filters > .extended-menus > .core > .bordersep > h2:contains('Month/Year')").text('月份 / 年');
	$("body#elections h2.special:contains('Official Results')").text('統計結果公告');
	// president
	$(".vote_box > .vote_box_layer > .vote_box_info > h4:contains('Goals')").text('目標');
	$('.vote_box > .vote_block > p').replaceText('votes','票');
	$(".vote_totals > p > span:contains('Total votes')").replaceText('Total votes:','總投票數：');
	if ((document.location.toString().indexOf("election-congress")!==-1) || (document.location.toString().indexOf("election-party")!==-1)){
		// congress
		$("table.electiondetails th:contains('Official candidates')").replaceText('Official candidates','正式名單');
		$("table.electiondetails th:contains('Wildcards')").replaceText('Wildcards','外卡名單');
		$("table.electiondetails th:contains('Not qualified')").replaceText('Not qualified','落選');
		$("table.electiondetails th:contains('Member of')").text('所屬政黨');
		$("table.electiondetails th:contains('No. of votes')").text('得票數');
		$("table.electiondetails span.smalldotted:exact('Presentation')").text('政見發表');
		$("table.electiondetails span.smalldotted:exact('No presentation')").text('沒有政見發表');
		// party
		$("table.elections th:exact('No.')").text('編號');
		$("table.elections th:contains('Candidate')").text('候選人');
		$("table.elections th:contains('No. of votes')").text('得票數');
		$("table.elections th:contains('% of votes')").text('得票率');
		$("table.elections a:exact('Vote')").text('投票');
		// others
		$("#messagealert.infoicon > p:exact('No data available yet')").text("目前沒有任何資料");
		var v_num = $('p.regular > span#number_of_votes').text();
		$('p.regular').html('總投票數: <span class="special rightpadded" id="number_of_votes">' +v_num+ '</span>');
	};
};
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 軍團 www.erepublik.com/en/main/group-home/
// 創立 www.erepublik.com/en/main/group-create/
// 首頁 www.erepublik.com/en/main/group-show/
// 列表 www.erepublik.com/en/main/group-list/
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if (document.location.toString().indexOf("/group-")!==-1) {
	$('h1').css('font-family','微軟正黑體,微软雅黑');
	if (document.location.toString().indexOf("/group-home/")!==-1) {
		// group-home
		$('body#military_units h1:first').text('軍團');
		$("table.info_message > tbody > tr > td > strong:contains('You are not a soldier of any Military Unit')").parent().html(
			'<strong>你目前不是任何軍團的成員</strong>你可以加入目前現有的軍團，或是自行創立一個自己想要的軍團。<br>加入軍團可以使你跟隨其他團員的腳步並更加團結，一同在戰場上作戰輸出。<br><a class="wicked" href="http://wiki.erepublik.com/index.php/Military_unit" target="_blank">更多軍團資訊</a>');
		$('#military_units_home > .create_military_unit > table > tbody > tr > td > a > span').text('創立軍團');
		$('#military_units_home > .join_military_unit > h3:first').text('提出申請加入軍團');
	} else if (document.location.toString().indexOf("/group-create/")!==-1) {
		$('body#create h1:first').text('創立軍團');
		$("table.warning_message > tbody > tr > td:contains('The Military Unit will be located in')").text('軍團總部將會設立在你公民國藉的國家中. 注意, 當你創立好軍團, 日後將不能更改軍團名稱及所在地點, 只能更改圖標和描述.')
		$('#create_military_unit > .holder.create_company > h2:first').text('軍團需求');
		$('#create_military_unit > .holder.create_company > .container_blue_border > .requirements > .req:eq(0) > div').replaceText('Funding Fee','啟動資金');
		$('#create_military_unit > .holder.create_company > .container_blue_border > .requirements > .req:eq(1) > div').replaceText('Military Rank','軍階等級');
		$('#create_military_unit > .holder.create_company > .container_blue_border > .requirements > .req:eq(2) > div').replaceText('Experience Level','經驗等級');
	} else if ((document.location.toString().indexOf("/group-show/")!==-1) || (document.location.toString().indexOf("/group-list/")!==-1)) {
		$('h3').css('font-family','微軟正黑體,微软雅黑');
		// group-show, group-list
		$('#military_group_header > .header_content > h2:first > big').replaceText('members','成員');
		$("#military_group_header > .header_content > .details > strong:contains('Location:')").text('所在地:');
		$("#military_group_header > .header_content > .details > strong:contains('Commander:')").text('指揮官:');
		$('#military_group_header > .header_content > .details > a.big_action.join > strong').text('加入');
		$("#military_group_header > .header_content > .details > a.simple > strong:contains('Resign')").text('退出軍團');
		$("#military_group_header > .header_content > .details > a:contains('View rank')").text('軍團排名');
		$("#military_group_header > .header_content > .details > a.backmu").text('返回軍團首頁');
		$("#group_right_column > .leader > h3:first:contains('Commander')").text('軍團指揮官');
		$("#group_right_column > .leader > h3:last:contains('Captain')").text('軍團小隊長');
		$('#group_right_column > .members > h3:first').replaceText('Members','軍團成員');
		$('#group_right_column > .members > a.show_all').text('查看全部');
                $('.mu_vote_banner .title') .text('小隊長選舉！');
                $('.mu_vote_banner .desc') .text('選舉將於15日開始');
                $('#candidate_holder.green_button a.candidate') .text('登記');
                $('.success_message td') .text('你已登記為小隊長候選人');        //不確定是否有用
		$('#group_orders > .requirements > ul.req_content > li:eq(0) > .details > strong').text('軍階到達General');
		$('#group_orders > .requirements > ul.req_content > li:eq(1) > .details > strong').text('以軍團成員的身份擊倒 10 個敵人');
		$('#group_orders > .requirements > ul.req_content > li:eq(2) > .details > strong').text('在 5 場不同的戰役中, 為國家和我們的同盟而戰');
                $("#today_orders h3:contains('Order of the day')").html('軍令戰場 <small>(由軍團小隊長或團長設定)</small>');
                $("#group_orders h3:contains('Recruit's orders')").text('新兵任務');
                $('#group_orders p').text('完成新兵任務，成為正式團員');
		$("table.info_message > tbody > tr > td:contains('You must be a member of')").text('你必須加入此軍團, 才能觀看軍團塗鴉牆.');
		$("table.error_message > tbody > tr > td:contains('Sorry, you need to have the same citizenship')").text('對不起, 你必須和該軍團相同國藉才能申請加入. 試著加入其它的軍團吧.');
		if (document.location.toString().indexOf("/group-list/")!==-1) {
			//group-list
			$('#members_holder > h3:first').text('軍團成員');
		};
	};
};
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 國家 www.erepublik.com/en/main/country/
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if ((document.location.toString().indexOf("/country")!==-1) || (document.location.toString().indexOf("/law/")!==-1)) {
	$('#filters > a.btn-filters-select.goleft').text('選擇');
	$('#profileholder > p > a.vroundbtnh25-start:eq(0) > span.vroundbtnh25-end > span.vroundbtnh25-core_large').text('捐贈國庫');
	$('#profileholder > p > a.vroundbtnh25-start:eq(1) > span.vroundbtnh25-end > span.vroundbtnh25-core_large').text('查看地圖');
	$(".extended-menus > .core > .bordersep > h2.goleft.big:contains('Country')").text('請選擇一個國家');
	$('ul.ftabs > li:eq(0) > a > span').text('社會地理');
	$('ul.ftabs > li:eq(1) > a > span').text('經濟統計');
	$('ul.ftabs > li:eq(2) > a > span').text('政治選舉');
	$('ul.ftabs > li:eq(3) > a > span').text('軍事資訊');
	$('ul.ftabs > li:eq(4) > a > span').text('管理中心');
	
	$("h2:exact('Current national goals')").text("當前的國家目標");
	$("a:exact('check current status')").text("檢查目前進度");
	$("p.general-text:contains('The elected president has not set any national goals for this month.')").text("總統並未設置本月的國家目標。");
	$("h2:exact('Monuments achieved')").text("紀念碑");
	
	//社會地理
	if (document.location.toString().indexOf("/country/society/")!==-1) {
		$("h2:exact('Citizens')").text("人口");
		$("span.fakeheight:eq(0)").text("活躍人口");
		$("span.fakeheight:eq(1)").text("本日新出生公民");
		$("span.fakeheight:eq(2)").text("國籍申請");
		$("span.fakeheight:eq(3)").text("公民平均等級");
		$("span.fakeheight:eq(4)").text("正在線上的公民");
		$("span.fakeheight:eq(5)").text("新生公民福利金");
		$("a.blue_arrow_small > span ").text("查看申請狀態");
		$("a.details-small").text("詳情");
	}

	//經濟統計
	if (document.location.toString().indexOf("/country/economy/")!==-1) {
		
		$("h2:exact('Country resources')").text("資源列表");
		$("h2:exact('Treasury')").text("國庫");
		$("h2:exact('Country trading embargoes')").text("國家貿易禁運資訊");
		$("td:contains('This country can trade with any other country in eRepublik.')").text("該國可以與任何國家進行貿易。");
		$("h2:exact('Taxes')").text("稅收");
		$(".resource_list > thead > tr > th:eq(0)").text("資源");
		$(".resource_list > thead > tr > th:eq(1)").text("產地");
		$("td > small:exact('Not available')").text("無");
		$("ul.profilemenu > li > a").text("國家銀行");		
	
		$(".resource_list > tbody > tr > td > span:exact('Fish')").text("魚");
		$(".resource_list > tbody > tr > td > span:exact('Grain')").text("穀物");
		$(".resource_list > tbody > tr > td > span:exact('Fruits')").text("水果");
		$(".resource_list > tbody > tr > td > span:exact('Cattle')").text("牛");
		$(".resource_list > tbody > tr > td > span:exact('Deer')").text("鹿");
		$(".resource_list > tbody > tr > td > span:exact('Iron')").text("鋼鐵");
		$(".resource_list > tbody > tr > td > span:exact('Saltpeter')").text("硝");
		$(".resource_list > tbody > tr > td > span:exact('Aluminum')").text("鋁");
		$(".resource_list > tbody > tr > td > span:exact('Oil')").text("油");
		$(".resource_list > tbody > tr > td > span:exact('Rubber')").text("橡膠");
		
		$("th:exact('Income Tax')").text("所得稅");
		$("th:exact('Import Tax')").text("進口稅");
		$("th:exact('VAT')").text("增值稅");
                $('table.citizens .fakeheight:eq(0)').text("食物");
		$("table.citizens .fakeheight:eq(1)").text("武器");
		$("table.citizens .fakeheight:eq(2)").text("機票");
		$("table.citizens .fakeheight:eq(3)").text("食物原料");
		$("table.citizens .fakeheight:eq(4)").text("武器原料");
		$("table.citizens .fakeheight:eq(5)").text("醫院");
		$("table.citizens .fakeheight:eq(6)").text("防禦設施");
		$("h2:exact('Salary')").text("工資");
		$("span.fakeheight:exact('Minimum')").text("最低薪資");
		$("span.fakeheight:exact('Average')").text("平均薪資");
		$("h2:exact('Info')").text("統計資訊");
		$("h2:exact('Revenues')").text("稅收資訊") 
	}
	//政治選舉
	if (document.location.toString().indexOf("/country/politics/")!==-1) {
		$("h2:exact('President')").text("總統");
		$("h2:exact('Congress')").text("議員");
		$("span.vroundbtnh25-core:contains('Election results')").text("選舉結果");
		$("span.vroundbtnh25-core:contains('Next elections')").text("下次選舉");
	}
	
	//軍事資訊
	if (document.location.toString().indexOf("/country/military/")!==-1) {
		$("table.info_message > tbody > tr > td").text("在對抗世仇國家時，戰場上所有的國民將有 10% 的戰場影響力加成。");
		$(".nameholder:contains('No current Natural Enemy')").text("現在沒有設定世仇國家")
		$("td:contains('There are no resistance wars in this country.')").text("現在境內沒有任何起義戰爭")
		var Our = $("div#profileholder > h1").text();
		$("h2.section:eq(0)").text("世仇國家");
		$("h2.section:eq(1)").html(Our+' 正在參與的戰爭');
		$("h2.section:eq(2)").html(Our+' 正在參與的起義戰爭');
		$("h2.section:eq(3)").text("同盟國家");
		
		$("a.vroundbtnh25-core:contains('details')").text("詳情");
		$("a.vroundbtnh25-core:contains('All wars')").text("所有戰爭");
		$("a.vroundbtnh25-core:contains('All resistance wars')").text("所有起義戰爭");
		$("a.vroundbtnh25-core:contains('All Alliances')").text("各國同盟情形");
	}
	//管理中心
	if (document.location.toString().indexOf("/country-administration/")!==-1) {
		$("span:exact('You are not a president or a congress member in this country.')").text('你現在不是這個國家的總統或議員');
		$(".adminaction > .goleft > span.goleft:contains('Hello, Congress Member')").text('你好, 國會議員閣下');
		$(".adminaction > .goleft > span.vround-redbtn-h20-start > span.vround-redbtn-h20-end > form > .vround-redbtn-h20-core:contains('Resign')").text('辭職');
		$(".adminaction > .goright:contains('Your proposals')").replaceText('Your proposals','你的提案');
		$(".adminaction > table > tbody > tr > td > span.vround-btn-start-xlarge > span.vround-btn-end-xlarge > input#expandLaw,input#colapseLaw").attr('value','提出法律提案');
		$(".holder > h2.section:contains('Law proposals')").text('法律提案');
		//congressman
		$("a:exact('New Citizen Fee')").text('新生公民補助款');
		$("a:exact('Donate')").text('捐贈');
		$("a:exact('Issue Money')").text('發行貨幣');
		$("a:exact('Taxes')").text('調整稅率');
		$("a:exact('Minimum Wage')").text('最低工資');
		$("a:exact('President Impeachment')").text('總統彈劾提案');
		$("a:exact('Provide citizenship')").text('國藉審核');
		$("a:exact('Natural Enemy')").text('世仇');
		//president
		$("a:exact('Alliance')").text('同盟');
		$("a:exact('Peace Proposal')").text('和平提案');
		$("a:exact('Trading Embargo')").text('貿易禁運');
		$("a:exact('Buy Constructions')").text('國家建設');
		$("a:exact('New Citizen Message')").text('新生公民訊息');
		//others
		$("a:contains('Tax change')").replaceText('Tax change:','調整稅率: ');
		$("table.laws.largepadded > tbody > tr > td > span.vroundbtnh25-start > span.vroundbtnh25-end > a.vroundbtnh25-core:contains('details')").text('詳情');
		$("table.laws.largepadded > tbody > tr > td:exact('Pending')").replaceText('Pending','表決中');
		$("table.laws.largepadded > tbody > tr > td:exact('Accepted')").replaceText('Accepted','通過');
		$("table.laws.largepadded > tbody > tr > td:exact('Rejected')").replaceText('Rejected','否決');
	} else if (document.location.toString().indexOf("/law/")!==-1) {
		$('h2').css('font-family','微軟正黑體,微软雅黑');
		$('.holder > .indent > .bordersep.special').css('font-family','微軟正黑體,微软雅黑');
		// law proposals
		$(".holder > .indent > .bordersep.special:contains('Law proposals')").text('法律提案');
		// donate
		$(".holder:eq(1) > .indent > .goleft > h2.special:first:contains('Donate')").text('捐贈');
		$('.holder:eq(1) > .indent > .goleft > p.largepadded').replaceText('Proposed by','提案人:').replaceText(',',', 提案時間:');
		$(".holder:eq(1) > .indent > p.largepadded:contains('Do you agree to transfer')").replaceText('Do you agree to transfer','請問你是否同意從國庫中捐贈').replaceText('from the country accounts to','到');
	};
};

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 檢舉 www.erepublik.com/en/tickets/report/
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if (document.location.toString().indexOf("/tickets/report/")!==-1) {
	$('h3').css('font-family','微軟正黑體,微软雅黑');
	$('div').css('font-family','微軟正黑體,微软雅黑');
	// report ticket
	$('body.reportAbuseBody > a.btn-arrow-left-small').text('取消');
	$('body.reportAbuseBody > h3').replaceText('Report ','檢舉').replaceText('a newspaper','本報').replaceText('an article','本文').replaceText('a comment','留言').replaceText('a wall post','塗鴉牆留言').replaceText('a wall comment','塗鴉牆回應').replaceText('a party','政黨');
	$('form.reportAbuse > div:first').html('依照 <a target="_blank" href="/en/laws">遊戲規則</a> 及 <a target="_blank" href="/en/terms-and-conditions">服務條款</a> 的規範，</br>你可以回報這些不適當的內容，所有的檢舉回報都受到嚴格保密.')
	$("form.reportAbuse > .reportLabel:contains('Reason for the report')").text('檢舉的理由:');
	$("form.reportAbuse > select#report_reason > option[value='6']").text('低俗內容');
	$("form.reportAbuse > select#report_reason > option[value='7']").text('公然侮辱');
	$("form.reportAbuse > select#report_reason > option[value='8']").text('種族歧視');
	$("form.reportAbuse > select#report_reason > option[value='9']").text('色情描寫');
	$("form.reportAbuse > select#report_reason > option[value='10']").text('垃圾訊息');
	$("form.reportAbuse > select#report_reason > option[value='11']").text('外部廣告');
	$("form.reportAbuse > select#report_reason > option[value='16']").text('失控狀況');
	$("form.reportAbuse > .reportMessage:contains('By submitting this report')").html('當送出這份檢舉的同時，表示你同意：</br> 如果被發現故意重覆送出無效的檢舉時，帳號願接受適當的處罰.')
	$("form.reportAbuse > .reportLabel:contains('Language in which the reported content is written')").text('檢舉內容的語言:');
	$("form.reportAbuse > div:last > input[value='Report']").attr('value','檢舉');
};


//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// 中文化人員紀念碑
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
if (document.location.toString().indexOf("/citizen/profile/")!==-1) {
	var selfid = $('a#financier').attr('href').split('/')[4];
	if ((document.location.toString().indexOf("/citizen/profile/"+selfid)!==-1)===false) {
		var transIco = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAd1JREFUKFO1zk9Ik3Ecx/GBdMpDp7p0iE4d6tBpl67RwUy0kLJ/1CGDSBZqmShiNEKSTUfGao6F1Ar/tj3PdK7ctKflpFot2irTQS3xmZZurqSnP8/bnxpdgqBDv9OXL5/X7/sxGP7XA9Yl1bk9//R/PDlttPUO81ekf50t1LORmD4fjSwHX02o24oaXOIgO/6AYplP2gHpVtD8sNANyWpm3slsqvMQfDFR8BuJcF4gPplsCY9TYz5K9vEReH8BUhfRnxYjR+6ypbEfk8v7XdO00hVYfSuAf0olI3TllS5e27aCZASPkfHW7fg+LHLYPkBZSzc1HX4MIrfG/XKSscwygXJ3AsulEujfCL7NBB2HiIt91Z37mPvCVLT7MORyuQ2XR2KEZj7yjZ/sb1c4Vl+F5DrOgH0Xg8EmpgSy+SMUNndSft27gtY3P4gx+inDtLbIXvsQtVfNOIbusfaETCh0nrRAHSNRCkS9EkvnKrII9CyTJSEqHnAOcsrZhfv5G3aab+CRa1EFaht+Qqmots/6C1mVGPGFHGPqLAedMqabATHPU3zNR4Wrh88C1XkfcrpPoaytd/VSUzBKKKUiv01xpkfh7O0AibksJq/CbqvEF/0H9fIjzklhTjollgAlh3HhaTlI3QAAAABJRU5ErkJggg==';
		if (document.location.toString().indexOf("/citizen/profile/3076162")!==-1) {
			// Billwilson
			$('body#citizenprofile .citizen_profile_header.auth > .citizen_state').prepend(
				'<div class="is tip" original-title="the member of eRepublik Traditional Chinese Translation Project."><span><img src="'+transIco+'" alt>三萌主義の国父</span></div>');};
		if (document.location.toString().indexOf("/citizen/profile/4633793")!==-1) {
			// blackca
			$('body#citizenprofile .citizen_profile_header.auth > .citizen_state').prepend(
				'<div class="is tip" original-title="the member of eRepublik Traditional Chinese Translation Project."><span><img src="'+transIco+'" alt>Myu 教団の娘</span></div>');};
		if (document.location.toString().indexOf("/citizen/profile/3076913")!==-1) {
			// lifethinker
			$('body#citizenprofile .citizen_profile_header.auth > .citizen_state').prepend(
				'<div class="is tip" original-title="the member of eRepublik Simplified Chinese Translation Project."><span><img src="'+transIco+'" alt>夢想の実賎者</span></div>');};
	};
};
