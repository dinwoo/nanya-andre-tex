<template lang="pug">
footer
	.topFooter
		.wrapper
			.content
				.title 全球銷售通路
				a.map(href="https://www.npc.com.tw/j2npc/zhtw/product/Cc1p06.do" target="_blank")
					.pic
						include ../assets/pug/earth_map.pug
				.social_box
					//- .title 其他連結
					//- a.icon(href="http://discovery.ariba.com/profile/AN01442007145")
						.svg_box
							include ../assets/pug/badge_icon.pug
					//- a.icon(href="")
					//- 	.svg_box
					//- 		include ../assets/pug/ig_icon.pug
					//- a.icon(href="")
					//- 	.svg_box
					//- 		include ../assets/pug/fb_icon.pug
			.content
				.title 產品資訊
				.link_box
					router-link.item(to="/application/pipe") 塑料管材防火包覆
					router-link.item(to="/application/welding") 電銲防火用
					router-link.item(to="/application/household") 家庭防火用
					router-link.item(to="/application/seats") 座椅內包覆防火材
					router-link.item(to="/application/daily") 民生防火材
					router-link.item(to="/application/insulation") 耐燃絕緣包覆材
					router-link.item(to="/customize") 客製產品開發

			.content
				.title 聯絡資訊
				.info_box
					a.item(href="https://www.nanya-andre-tex.com" target="_blank")
						.icon
							include ../assets/pug/earth_icon.pug
						.txt www.nanya-andre-tex.com
					a.item(href="mailto:SW.Meng@npc.com.tw" target="_blank")
						.icon
							include ../assets/pug/mail_icon.pug
						.txt SW.Meng@npc.com.tw
					a.item(href="tel:0226806311" target="_blank")
						.icon
							include ../assets/pug/tel_icon.pug
						.txt +886-2-2680-6311#2612
					a.item(href="javascript:;" target="_blank")
						.icon
							include ../assets/pug/fax_icon.pug
						.txt +886-2-2680-5771
					a.item(href="https://goo.gl/maps/KFKPRxzyrGkB4Rfc9" target="_black")
						.icon
							include ../assets/pug/house_icon.pug
						.txt 台北市敦化北路201號台塑大樓3樓502室
			.content
				.title 快速連結
				.company_box
					a.item(href="https://www.fpg.com.tw/tw" target="_blank")
						figure.company
							img(src="@/assets/images/footer_company_01.png", alt="")
					a.item(href="http://www.fpc.com.tw/fpcw/" target="_blank")
						figure.company
							img(src="@/assets/images/footer_company_05.png", alt="")


					a.item(href="http://www.npc.com.tw/j2npc/zhtw" target="_blank")
						figure.company
							img(src="@/assets/images/footer_company_02.png", alt="")
					a.item()
						figure.QRCode
							img(src="@/assets/images/footer_QRCode_01.png", alt="")
						p.name 南亞塑膠城
					a.item(href="http://www.fcfc.com.tw/PRE/TW/index.html" target="_blank")
						figure.company
							img(src="@/assets/images/footer_company_06.png", alt="")
					a.item(href="http://www.fpcc.com.tw/tc/" target="_blank")
						figure.company
							img(src="@/assets/images/footer_company_03.png", alt="")
					a.item(href="http://www.fhs.com.vn/" target="_blank")
						figure.company
							img(src="@/assets/images/footer_company_07.png", alt="")
					//- a.item()
					//- 	figure.QRCode
					//- 		img(src="./images/footer_QRCode_02.png", alt="")
					//- 	p.name 多媒體中心
	.subFooter
		.wrapper
			.box
				.copyright Copyright © 2019 南亞塑膠工業股份有限公司 All Rights Reserved.
				//- .right_content
				//- 	.link_box
				//- 		a.item(href="http://crm2.fpg.com.tw/j2hr2p/home/IndexHomeController.do" target="_black") 人才招募
				//- 		a.item(href="https://www.npc.com.tw/j2npc/zhtw/sitemap" target="_black") 網站導覽
				//- 		a.item(href="https://www.npc.com.tw/j2npc/zhtw/policy.jsp" target="_black") 隱私權保護政策
				//- 		//- a.item(href="" target="_black") 
				//- 		a.item(href="" target="_black") 聯絡我們
				//- 	.len 語系: 繁體中文
			.box
				.txt 網站內之所有著作及資料，其著作權、專利權、商標、其他智慧財產權、所有權或其他權利，均為本企業所有，非經本企業合法授權，不得擅自重製、改作或以其他任何形式、基於任何目的加以使用。
</template>

<script>
export default {};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"

footer
	.topFooter
		padding: 70px 0
		background-color: #f9f9f9
		.wrapper
			font-size: 0
			+wrapperStyle
			.content
				width: 25%
				margin-bottom: 30px
				display: inline-block
				vertical-align: top
				text-align: left
				.title
					width: 220px
					color: $gray
					font-size: 20px
					font-weight: 500
					padding-bottom: 10px
					border-bottom: 1px solid #e1e1e1
					position: relative
					&:before
						content: ''
						display: block
						width: 85px
						height: 2px
						background-color: $red
						position: absolute
						bottom: -2px
						left: 0
				&:nth-child(1)
					.title
						&:before
							content: ''
							display: block
							width: 135px
				&:nth-child(4)
					.title
						width: 100%

				a.map
					display: block
					padding-top: 30px
					.pic
						width: 210px
						fill: $gray
				.social_box
					// padding-top: 50px
					a.icon
						display: inline-block
						margin-top: 10px
						& + a.icon
							margin-left: 5px
						// figure
						// 	width: 35px
						// 	display: inline-block
						// 	vertical-align: top
						.svg_box
							width: 135px
							height: 35px
							display: inline-block
							vertical-align: top
							.st0
								stroke: $blue
								fill: #f9f9f9
								stroke-width: 10
								stroke-miterlimit: 10
								transition: .3s
							.st1
								fill: $blue
								transition: .3s
						+hover
							.svg_box
								.st0
									fill: $blue
								.st1
									fill: #f9f9f9

				.link_box
					font-size: 0
					padding-top: 7px
					a.item
						width: 140px
						font-size: 15px
						color: $gray
						padding: 7px 10px
						display: inline-block
						vertical-align: middle
						box-sizing: border-box

				.info_box
					padding-top: 7px
					a.item
						display: block
						width: 100%
						padding: 7px 0
						.icon
							width: 15px
							height: 15px
							padding-left: 4px
							display: inline-block
							vertical-align: middle
							fill: $gray
						.txt
							width: 230px
							padding-left: 10px
							font-size: 15px
							color: $gray
							display: inline-block
							vertical-align: middle

				.company_box
					padding-top: 6px
					font-size: 0
					text-align: left
					a.item
						margin-top: 8px
						// width: 79px
						width: calc((100% - 16px)/4)
						padding: 6px 0
						background-color: #fff
						border: 1px solid #dfdfdf
						display: inline-block
						box-sizing: border-box
						border-radius: 5px
						overflow: hidden
						vertical-align: middle
						margin-left: 3px
						&:nth-child(4n+1)
							margin-left: 0
						&:nth-child(4n)
							margin-left: 8px
							background-color: rgba(#fff,0)
							border: none
						figure.company
							// width: 47px
							width: 60%
							margin: auto
						&:nth-child(1)
							padding: 0
							figure.company
								width: 100%
						figure.QRCode
							width: 55px
							margin: auto
						.name
							font-size: 12px
							color: $gray
							text-align: center
							padding-top: 5px
							letter-spacing: -1px
	.subFooter
		background-color: #f0511d
		.wrapper
			width: 1060px
			margin: auto
			.box
				font-size: 12px
				padding: 20px 0 15px
				+clearfix
				.copyright
					color: #fff
					// float: left
					width: 100%
					text-align: center
					line-height: 1.3
				.right_content
					float: right
					.link_box
						font-size: 0
						display: inline-block
						vertical-align: middle
						a.item
							font-size: 12px
							margin: 0 12px
							color: #fff
							display: inline-block
							vertical-align: middle
					.len
						color: #fff
						padding-left: 15px
						border-left: 1px solid #fff
						display: inline-block
						vertical-align: middle
				.txt
					color: #fff
					line-height: 1.3
				& + .box
					border-top: 1px solid #fff
					padding: 15px 0 20px

	@include rwd(1280px)
		.topFooter
			// padding: 70px 0
			.wrapper
				width: 620px
				.content
					width: 50%
	@include rwd(1120px)
		.subFooter
			.wrapper
				width: 900px
	@include rwd(960px)
		.subFooter
			.wrapper
				width: 590px
				.box
					.copyright
						float: none
						margin-bottom: 20px
						text-align: center
					.right_content
						float: none
						text-align: center
	@include rwd(640px)
		.topFooter
			// padding: 70px 0
			.wrapper
				width: 350px
				padding: 0 15px
				.content
					width: 100%
					.title
						width: 100%
					a.map
						.pic
							width: 100%
					.company_box
						a.item
							// width: 100px
					&:nth-child(4)
						.title
							width: 100%
		.subFooter
			.wrapper
				width: 320px
				.box
					// .copyright
					.right_content
						.link_box
							a.item
								margin: 0 5px
						.len
							display: none
	@include rwd(374px)
		.topFooter
			// padding: 70px 0
			.wrapper
				width: 300px
				padding: 0 10px
				.content
					.company_box
						a.item
							// width: 100px
							.name
								letter-spacing: -2px
		.subFooter
			.wrapper
				width: 270px
				.box
					// .copyright
					.right_content
						.link_box
							a.item
								margin: 0 4px
						.len
							display: none
</style>
