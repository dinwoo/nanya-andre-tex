<template lang="pug">
	article#contact
		section.banner
			.slogan 聯絡我們
		section.info
			.wrapper
				.box
					//- p.txt 
					//- 	| 歡迎您造訪本公司網站，我們非常歡迎您
					//- 	br
					//- 	| 任何問題請您與我們聯絡
					//- 	br
					//- 	| 進一步討論服務細節
					p.contact_txt 電話：+886-2-2680-6311#2612
					p.contact_txt 傳真：+886-2-2680-5771
					p.contact_txt SW.Meng@npc.com.tw
				.box
					p.name 
						| 南亞塑膠工業股份有限公司
						br
						| 塑一部營業三處
					p.addr 地址:台北市敦化北路201號3樓502室
		section.form_part
			.wrapper
				h1.title 聯絡我們
				p.txt 
					| 如果您對南亞公司有任何的建議或批評，我們非常歡迎您能來信指教，
					br
					| 或致電客服專線，我們將用心聆聽，並以最快的速度回應給您，謝謝。
				.row
					label(for="") 選擇聯絡性質

					select#emailSelect(name="")
						option(value="1") 內容待補
						option(value="2") 內容待補
						option(value="3") 內容待補
						option(value="4") 內容待補
						option(value="5") 內容待補
						option(value="6") 內容待補
						option(value="7") 內容待補
						option(value="8") 內容待補
						option(value="9") 內容待補
						option(value="10") 內容待補
						option(value="11") 內容待補
						option(value="12") 內容待補
						option(value="13") 內容待補
						option(value="14") 內容待補
						option(value="15") 內容待補
						option(value="16") 內容待補
						option(value="17") 內容待補
				.row
					label(for="") 姓名
					input#name(type="text" placeholder="請輸入您的姓名")
				.row
					label(for="") 聯絡電話
					input#tel(type="tel" placeholder="請輸入您的聯絡電話")
				.row
					label(for="") 手機號碼
					input#phone(type="tel" placeholder="請輸入您的手機號碼" maxLength="10")
				.row
					label(for="") 電子信箱
					input#email(type="text" placeholder="請輸入您的電子信箱")
				.row
					label(for="") 您的留言
					textarea#txt(name="", placeholder="您想反應的狀況，建議，或諮詢事項")
				.send_btn 送出

		section.map
			iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.33372852544!2d121.54750761500672!3d25.05667548396177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abef461278a7%3A0x2cc681970e60513d!2z5Y-w5aGR5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1604591479166!5m2!1szh-TW!2stw" width="600" height="450" frameborder="0" style="border:0" allowfullscreen)
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/var.sass"

input:-webkit-autofill
	-webkit-box-shadow: none
	transition: background-color 5000s ease-in-out 0s
	-webkit-text-fill-color: $gray
	&:hover, &:focus, &:active
		-webkit-box-shadow: none
		transition: background-color 5000s ease-in-out 0s
		-webkit-text-fill-color: $gray

article
	.wrapper
		width: 960px
		margin: auto
		@include rwd(1000px)
			width: 720px
		@include rwd(768px)
			width: 500px
		@include rwd(560px)
			width: 310px
		@include rwd(374px)
			width: 280px

article#contact
	section.banner
		// background-image: url('../images/contact_banner.png')
		background-repeat: no-repeat
		background-position: 92% center
		background-size: cover
		width: 100%
		height: 680px
		position: relative
		&:before
			content: ''
			display: block
			width: 100%
			height: 100%
			background-color: rgba(#040404,.3)
		.slogan
			font-size: 76px
			color: #fff
			text-shadow: 0px 0px 10px rgba(#000,.7)
			+pstc5
		@include rwd(1680px)
			height: 590px
		@include rwd(768px)
			height: 340px
			.slogan
				font-size: 56px
		@include rwd(560px)
			height: 260px
			.slogan
				font-size: 36px

	section.info
		padding: 60px 0
		.wrapper
			font-size: 0
			.box
				width: calc((100% - 15px)/2)
				padding: 35px 0
				text-align: center
				display: inline-block
				vertical-align: middle
				color: $gray
				position: relative
				& + .box
					margin-left: 15px
				&:before
					content: ''
					display: block
					width: 100%
					height: 312px
					border: 1px solid $orange
					pointer-events: none
					+pstc0
				p.txt
					color: $gray
					margin-bottom: 30px
					+fontP
				p.contact_txt
					width: 280px
					padding: 8px 0
					background-color: $orange
					display: inline-block
					font-size: 17px
					color: #fff
					& + p.contact_txt
						margin-top: 10px
				p.name
					font-size: 26px
					line-height: 1.8
					color: $gray
					margin-bottom: 40px
				p.addr
					color: $gray
					+fontP
		@include rwd(1000px)
			// padding: 60px 0
			.wrapper
				.box
					// width: calc((100% - 15px)/2)
					// padding: 35px 0
					& + .box
						// margin-left: 15px
					&:before
						// height: 312px
					p.txt
						// margin-bottom: 30px
						font-size: 18px
					p.contact_txt
						width: 220px
						// padding: 8px 0
						font-size: 15px
						& + p.contact_txt
							// margin-top: 10px
					p.name
						font-size: 22px
						// margin-bottom: 40px
					p.addr
						font-size: 18px
		@include rwd(768px)
			padding: 30px 0
			.wrapper
				.box
					width: 100%
					// padding: 35px 0
					& + .box
						margin-left: 0px
					&:before
						// height: 230px
						height: 180px
					p.txt
						margin-bottom: 20px
						font-size: 18px
					p.contact_txt
						width: 260px
						// padding: 8px 0
						font-size: 15px
						& + p.contact_txt
							// margin-top: 10px
					p.name
						font-size: 22px
						// margin-bottom: 40px
					p.addr
						font-size: 18px
		@include rwd(560px)
			// padding: 30px 0
			.wrapper
				.box
					// width: 100%
					// padding: 35px 0
					& + .box
						// margin-left: 0px
					&:before
						// height: 200px
						height: 160px
					p.txt
						// margin-bottom: 20px
						font-size: 14px
					p.contact_txt
						width: 200px
						// padding: 8px 0
						font-size: 12px
						& + p.contact_txt
							// margin-top: 10px
					p.name
						font-size: 18px
						margin-bottom: 20px
					p.addr
						font-size: 14px
	section.form_part
		padding: 40px 0
		.wrapper
			h1.title
				margin-bottom: 30px
				font-size: 48px
				line-height: 1.5
				color: $orange
				font-weight: normal
				text-align: center
			p.txt
				font-size: 24px
				line-height: 1.5
				color: #121212
				text-align: center
				margin-bottom: 60px
			.row
				font-size: 0
				& + .row
					margin-top: 20px
				label
					font-size: 22px
					padding: 11.5px 0
					line-height: 1.5
					color: $gray
					width: 160px
					display: inline-block
					vertical-align: middle
				select
					appearance: none
					background-image: url("../assets/images/select_arrow.png")
					background-size: 15px
					background-position: calc(100% - 50px) center
					background-repeat: no-repeat
					font-size: 20px
					width: calc(100% - 160px)
					padding: 14px 20px
					box-sizing: border-box
					border-radius: 5px
					border: 1px solid #e2e0e0
					outline: none
					display: inline-block
					vertical-align: middle
					option
				input,textarea
					font-size: 20px
					width: calc(100% - 160px)
					padding: 15px 20px
					box-sizing: border-box
					border-radius: 5px
					border: 1px solid #e2e0e0
					outline: none
					display: inline-block
					vertical-align: middle
				textarea
					resize: none
					height: 330px
					vertical-align: top
			.send_btn
				width: 170px
				padding: 19px 0
				margin-left: 160px
				margin-top: 60px
				font-size: 22px
				color: #fff
				text-align: center
				background-color: $orange
				border-radius: 4px
				cursor: pointer
		@include rwd(1000px)
			// padding: 40px 0
			.wrapper
				h1.title
				p.txt
					font-size: 22px
		@include rwd(768px)
			padding: 20px 0
			.wrapper
				h1.title
					margin-bottom: 20px
					font-size: 30px
				p.txt
					font-size: 16px
					margin-bottom: 30px
				.row
					& + .row
						// margin-top: 20px
					label
						font-size: 18px
						padding: 11.5px 0
						width: 130px
					select
						// background-size: 15px
						// background-position: calc(100% - 50px) center
						font-size: 16px
						width: calc(100% - 130px)
						// padding: 14px 20px
						// border-radius: 5px
						option
					input,textarea
						font-size: 16px
						width: calc(100% - 130px)
						// padding: 15px 20px
						// border-radius: 5px
					textarea
						// height: 330px
				.send_btn
					// width: 170px
					// padding: 19px 0
					margin-left: 130px
					margin-top: 30px
					font-size: 18px
					// border-radius: 4px
		@include rwd(560px)
			padding: 20px 0
			.wrapper
				h1.title
					// margin-bottom: 20px
				p.txt
					font-size: 14px
					// margin-bottom: 30px
					br
						display: none
				.row
					& + .row
						// margin-top: 20px
					label
						// font-size: 18px
						padding: 0
						width: 100%
					select
						// background-size: 15px
						background-position: calc(100% - 20px) center
						// font-size: 16px
						width: 100%
						padding: 14px 10px
						// border-radius: 5px
						option
					input,textarea
						// font-size: 16px
						width: 100%
						padding: 15px 10px
						// border-radius: 5px
					textarea
						// height: 330px
				.send_btn
					// width: 170px
					// padding: 19px 0
					margin: 20px auto
					// font-size: 18px
					// border-radius: 4px

	section.map
		iframe
			width: 100%
			height: 405px
</style>
