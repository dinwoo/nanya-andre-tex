<template lang="pug">
	article#contact
		section.banner
			BannerSwiper(
				:pictureLink="bannerLink"
			)
		section.info
			.wrapper
				.box
					//- p.txt 
					//- 	| 歡迎您造訪本公司網站，我們非常歡迎您
					//- 	br
					//- 	| 任何問題請您與我們聯絡
					//- 	br
					//- 	| 進一步討論服務細節
					p.contact_txt {{$t(`${$route.name}.info.person`)}}
					p.contact_txt {{$t(`${$route.name}.info.phone`)}}
					p.contact_txt {{$t(`${$route.name}.info.mobile`)}}
					p.contact_txt {{$t(`${$route.name}.info.fax`)}}
					p.contact_txt {{$t(`${$route.name}.info.email`)}}
				.box
					p.name(v-html="$t(`${$route.name}.info.txt`)")
					p.addr {{$t(`${$route.name}.info.address`)}}
		section.form_part
			.wrapper
				h1.title {{$t(`${$route.name}.form.title`)}}
				p.txt {{$t(`${$route.name}.form.remind`)}}
				.row
					label(for="") {{$t(`${$route.name}.form.nature`)}}
					select#emailSelect(name="")
						option(v-for="item in $t(`${$route.name}.form.emailSelect`)" :key="item.id" :value="item.id") {{item.name}}
				.row
					label(for="") {{$t(`${$route.name}.form.name`)}}
					input#name(type="text" :placeholder="$t(`${$route.name}.form.namePlaceholder`)")
				.row
					label(for="") {{$t(`${$route.name}.form.phone`)}}
					input#tel(type="tel" :placeholder="$t(`${$route.name}.form.phonePlaceholder`)")
				.row
					label(for="") {{$t(`${$route.name}.form.mobile`)}}
					input#phone(type="tel" :placeholder="$t(`${$route.name}.form.mobilePlaceholder`)" maxLength="10")
				.row
					label(for="") {{$t(`${$route.name}.form.email`)}}
					input#email(type="text" :placeholder="$t(`${$route.name}.form.emailPlaceholder`)")
				.row
					label(for="") {{$t(`${$route.name}.form.message`)}}
					textarea#txt(name="", :placeholder="$t(`${$route.name}.form.messagePlaceholder`)")
				.row.verification-code
					label(for="") {{$t(`${$route.name}.form.verificationCode`)}}
					input#verificationCode(type="text")
					.get-code
						Identify(:identifyCode="identifyCode")
					figure.refresh(
						@click="refreshCode()"
					)
						img(src="@/assets/images/refresh.png")
				.send_btn(@click="") {{$t(`${$route.name}.form.submit`)}}

		section.map
			iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.33372852544!2d121.54750761500672!3d25.05667548396177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abef461278a7%3A0x2cc681970e60513d!2z5Y-w5aGR5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1604591479166!5m2!1szh-TW!2stw" width="600" height="450" frameborder="0" style="border:0" allowfullscreen)
</template>

<script>
import BannerSwiper from "@/components/BannerSwiper.vue";
import Identify from "@/components/Identify.vue";
// import Email from "../../public/assets/js/smtp";
import emailjs from "emailjs-com";

export default {
  components: {
    BannerSwiper,
    Identify,
  },
  data() {
    return {
      bannerLink: [
        {
          1: "banner-1.jpg",
        },
        {
          1: "banner-1-m.jpg",
        },
      ],
      identifyCode: "",
      identifyCodes:
        "0123456789abcdefghijklmnopqrstuvwxuzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };
  },
  metaInfo() {
    return {
      title: this.$t(`Meta.title`),
      meta: [
        {
          name: "title",
          content: this.$t(`${this.$route.name}.meta.title`),
        },
        {
          name: "description",
          content: this.$t(`${this.$route.name}.meta.description`),
        },
        {
          name: "keyword",
          content: this.$t(`${this.$route.name}.meta.keyword`),
        },
        {
          name: "og:title",
          content: this.$t(`${this.$route.name}.meta.title`),
        },
        {
          name: "og:description",
          content: this.$t(`${this.$route.name}.meta.description`),
        },
      ],
    };
  },
  created() {
    this.refreshCode();
  },
  methods: {
    sendMail() {
      const templateParams = {
        to_name: "福利",
        from_name: "daniel",
        message: "成功寄信",
        test_msg: "ya!!",
      };
      const user_id = "user_2Ard5IDrGnOvWsMdEOkPy";

      emailjs.send("gmail", "template_3piy0z5", templateParams, user_id).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    refreshCode() {
      //
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    randomNum(min, max) {
      max = max + 1;
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 隨機生成驗證碼字符串
    makeCode(data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)];
      }
    },
  },
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
		// background-repeat: no-repeat
		// background-position: 92% center
		// background-size: cover
		// width: 100%
		// height: 680px
		// position: relative
		// &:before
		// 	content: ''
		// 	display: block
		// 	width: 100%
		// 	height: 100%
		// 	background-color: rgba(#040404,.3)
		// .slogan
		// 	font-size: 76px
		// 	color: #fff
		// 	text-shadow: 0px 0px 10px rgba(#000,.7)
		// 	+pstc5
		// @include rwd(1680px)
		// 	height: 590px
		// @include rwd(768px)
		// 	height: 340px
		// 	.slogan
		// 		font-size: 56px
		// @include rwd(560px)
		// 	height: 260px
		// 	.slogan
		// 		font-size: 36px

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
					width: 290px
					padding: 8px
					background-color: $orange
					display: inline-block
					font-size: 17px
					color: #fff
					text-align: left
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
						width: 250px
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
						height: 220px
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
						height: 200px
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
				+fontH1
				margin-bottom: 30px
				line-height: 1.5
				color: $orange
				font-weight: normal
				text-align: center
			p.txt
				+fontP
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
					padding: 11.5px 5px
					line-height: 1.5
					color: $gray
					width: 170px
					display: inline-block
					vertical-align: middle
					box-sizing: border-box
				select
					appearance: none
					background-image: url("../assets/images/select_arrow.png")
					background-size: 15px
					background-position: calc(100% - 50px) center
					background-repeat: no-repeat
					font-size: 20px
					width: calc(100% - 170px)
					padding: 14px 20px
					box-sizing: border-box
					border-radius: 5px
					border: 1px solid #e2e0e0
					outline: none
					display: inline-block
					vertical-align: middle
					// option
				input,textarea
					font-size: 20px
					width: calc(100% - 170px)
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
				&.verification-code
					text-align: left
					input
						width: 120px
						+dib
					.get-code
						margin: 0 10px
						+dib
					.refresh
						width: 30px
						cursor: pointer
						+dib
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
				// h1.title
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
						// option
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
				// h1.title
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
						// option
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
