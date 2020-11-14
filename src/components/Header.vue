<template lang="pug">
header
	.wrapper
		a.nanya_logo(href="./")
			figure.pic
				//- img(:src="compileFilePath('logo.jpg')" alt='')
				img(src="@/assets/images/logo.png", alt="")
		.main(
			v-if="isHamOpen||screenWidth>960"
		)
			ul.mainMenu
				li.mainItem 
					router-link.mainA(to="/") {{$t(`Header.home`)}}
				li.mainItem 
					a.mainA(href="http://www.nanya-plastics-mall.com.tw") {{$t(`Header.plastics`)}}
				li.mainItem(
					:class="{'active':isSubMenuOpen}"
				)
					.mainA(
						href="javascript:;"
						@click="isSubMenuOpen=!isSubMenuOpen"
					) {{$t(`Header.application`)}}
					ul.subMenu.two_column(
						v-if="isSubMenuOpen||screenWidth>960"
						:class="{'disnone':screenWidth>960}"
					)
						li.subItem
							router-link.subA(to="/application/pipe") {{$t(`Header.pipe`)}}
						li.subItem
							router-link.subA(to="/application/welding") {{$t(`Header.welding`)}}
						li.subItem
							router-link.subA(to="/application/household") {{$t(`Header.household`)}}
						li.subItem
							router-link.subA(to="/application/seats") {{$t(`Header.seats`)}}
						li.subItem
							router-link.subA(to="/application/daily") {{$t(`Header.daily`)}}
						li.subItem
							router-link.subA(to="/application/insulation") {{$t(`Header.insulation`)}}
						li.subItem
							router-link.subA(to="/customize") {{$t(`Header.customize`)}}
				li.mainItem 
					router-link.mainA(to="/test") {{$t(`Header.test`)}}
				li.mainItem 
					router-link.mainA(to="/case") {{$t(`Header.case`)}}
				li.mainItem 
					router-link.mainA(to="/certificate") {{$t(`Header.certificate`)}}
				li.mainItem 
					router-link.mainA(to="/contact") {{$t(`Header.contact`)}}
			.lang(href="")
				.svg_box
					include ../assets/pug/earth_svg.pug
				p {{$t(`Header.lang`)}} : {{langTxt}} ▼
				ul.subMenu
					li.subItem
						.subA(@click="setLang('zh')") 繁體中文
						.subA(@click="setLang('ch')") 简体中文
						.subA(@click="setLang('en')") English
			.close(
				@click="isHamOpen=false"
			)
		.ham(
			@click="isHamOpen=true"
		)
			.line
			.line
			.line

		
</template>

<script>
// import "/public/assets/css/style.min.css";
export default {
  data() {
    return {
      isHamOpen: false,
      isSubMenuOpen: false,
      screenWidth: document.body.clientWidth,
    };
  },
  computed: {
    langTxt() {
      if (this.lang == "en") {
        return "English";
      } else if (this.lang == "ch") {
        return "简体中文";
      } else {
        return "繁體中文";
      }
    },
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // that.screenWidth = that.$store.state.canvasWidth
          console.log(that.screenWidth);
          // that.init();
          that.timer = false;
        }, 400);
      }
    },
    $route: function() {
      this.isHamOpen = false;
      this.isSubMenuOpen = false;
    },
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  methods: {
    // 儲存切換的語系
    setLang(value) {
      this.$store.commit("setLang", value);
      this.$i18n.locale = value;
      localStorage.setItem("footmark-lang", value);
    },
    // findText(text) {
    //   return this.text;
    // },
  },
};
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
 * v2.0 | 20110126
 * License: none (public domain) */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after {
  content: "";
  content: none;
}

q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>

<style lang="sass" scoped>
@import "../assets/sass/var.sass"
header
	position: fixed
	top: 0
	left: 0
	z-index: 50
	width: 100%
	background-color: #f9f9f9
	.wrapper
		width: 1350px
		margin: auto
		+clearfix
		a.nanya_logo
			float: left
			display: inline-block
			figure.pic
				width: 225px
				padding: 16px 0
		.main
			font-size: 0
			float: right
			ul.mainMenu
				display: inline-block
				vertical-align: middle
				li.mainItem
					width: 100px
					margin: 0 7.5px
					display: inline-block
					vertical-align: middle
					text-align: center
					position: relative
					@include before
						width: 100%
						height: 4px
						background-color: $red
						opacity: 0
						position: absolute
						bottom: 0
						right: 0
						left: 0
						margin: auto
						transition: .3s
					.mainA
						width: 100%
						padding: 36px 0
						display: inline-block
						font-size: 18px
						color: $gray
					ul.subMenu
						// display: none
						// width: 165px
						background-color: #f9f9f9
						width: 185px
						border: 1px solid #acacac
						padding-bottom: 5px
						text-align: left
						position: absolute
						z-index: 10
						top: 90px
						left: -35px
						&.disnone
							display: none
						@include before
							width: 100%
							height: 5px
							background-color: $red
							position: absolute
							bottom: 0
						li.subItem
							width: 100%
							display: inline-block
							.subA
								// width: 165px
								width: 100%
								padding: 16px 10px
								box-sizing: border-box
								text-align: left
								background-color: #f9f9f9
								display: inline-block
								vertical-align: middle
								font-size: 18px
								color: $gray
								text-align: center
							@include hover
								.subA
									background-color: #ebebeb
							// &:nth-last-child(2)
							// 	@include hover
							// 		.subA
							// 			background-color: #f9f9f9
							// 			cursor: default
						&.two_column
							width: 370px
							li.subItem
								width: 50%
					@include hover
						@include before
							opacity: 1
						ul.subMenu
							display: block !important
			.lang
				margin-left: 10px
				padding: 36.5px 0
				display: inline-block
				vertical-align: middle
				position: relative
				cursor: pointer
				@include hover
					.subMenu
						display: block
				.svg_box
					width: 17px
					height: 17px
					fill: $gray
					display: inline-block
					vertical-align: middle
				p
					font-size: 16px
					padding-left: 10px
					color: $gray
					display: inline-block
					vertical-align: middle
				.subMenu
					display: none
					// width: 165px
					background-color: #f9f9f9
					width: 100px
					// border: 1px solid #acacac
					// padding-bottom: 5px
					padding: 4px 0
					text-align: left
					position: absolute
					z-index: 10
					top: 90px
					right: 0px
					// +before
					// 	width: 100%
					// 	height: 5px
					// 	background-color: $red
					// 	position: absolute
					// 	bottom: 0
					.subItem
						width: 100%
						display: inline-block
						.subA
							// width: 165px
							width: 100%
							padding: 10px 10px
							box-sizing: border-box
							text-align: left
							background-color: #f9f9f9
							display: inline-block
							vertical-align: middle
							font-size: 18px
							color: $gray
							text-align: center
							@include rwd(1000px)
								font-size: 12px
							@include hover
								.subA
									background-color: #ebebeb
		.ham
			display: none
	@include rwd(1400px)
		.wrapper
			width: 1210px
			.main
				.lang
					margin-left: 20px
	// @include rwd(1280px)
	// 	.wrapper
	// 		width: 960px
	// 		.main
	// 			ul.mainMenu
	// 				li.mainItem
	// 					width: 90px
			// 			margin: 0 7.5px
			// 			+before
			// 			.mainA
			// 				width: 100%
			// 				padding: 36px 0
			// 			ul.subMenu
			// 				width: 165px
			// 				padding-bottom: 5px
			// 				+before
			// 				li.subItem
			// 					.subA
			// 						width: 165px
			// 						padding: 16px 0
				// .lang
				// 	padding-left: 20px
					// .svg_box
					// 	width: 17px
					// 	height: 17px
					// p
					// 	font-size: 16px
					// 	padding-left: 10px
	@include rwd(1280px)
		.wrapper
			width: 890px
			a.nanya_logo
				figure.pic
					width: 145px
					padding: 21.5px 0
			.main
				ul.mainMenu
					li.mainItem
						width: 70px
						// margin: 0 7.5px
						@include before
						.mainA
							padding: 33px 0
							font-size: 14px
						ul.subMenu
							top: 80px
							// width: 60px
							// padding-bottom: 5px
							@include before
							li.subItem
								.subA
									font-size: 14px
									// width: 165px
									// padding: 16px 0
				.lang
					// padding-left: 10px
					padding: 31.5px 0
					.svg_box
						// width: 17px
						// height: 17px
					p
						font-size: 12px
						// padding-left: 10px
					ul.subMenu
						top: 80px
	// @include rwd(900px)
	// 	.wrapper
	// 		width: 730px
	// 		.main
	// 			.lang
	// 				margin-left: 10px
			// 		.svg_box
			// 			// width: 17px
			// 			// height: 17px
			// 		p
			// 			font-size: 12px
			// 			// padding-left: 10px
	@include rwd(960px)
		.wrapper
			width: calc(100% - 30px)
			a.nanya_logo
				figure.pic
					padding: 16.5px 0
			.main
				// display: none
				width: 100%
				height: 100vh
				background-color: #f9f9f9
				position: absolute
				left: 0
				top: 0
				z-index: 10
				overflow: auto
				ul.mainMenu
					display: block
					width: 310px
					padding-top: 100px
					margin: auto
					li.mainItem
						width: 100%
						margin: 0px
						display: block
						// border-bottom: 1px solid $red
						@include before
						.mainA
							padding: 15px 0
							font-size: 18px
							text-align: left
							overflow: hidden
							position: relative
							@include after()
								width: 100%
								height: 1px
								background-color: $red
								position: absolute
								bottom: 0
						&:nth-child(3)
							.mainA
								@include before()
									background-color: #faa
									width: 8px
									height: 10px
									background: url('/assets/images/nacmenu-link.svg') right top no-repeat
									background-size: 6.5px 30px
									transform: rotate(90deg)
									position: absolute
									top: 0
									bottom: 0
									right: 0
									margin: auto
						&.active
							&:nth-child(3)
								.mainA
									&:before
										transform: rotate(270deg)
									&:after
										height: 5px
						ul.subMenu
							// display: none
							width: calc(100% - 30px)
							margin: auto
							border: none
							padding-bottom: 5px
							position: static
							transform: translateX(0%)
							@include before
								width: calc(100% + 30px)
								height: 1px
								background-color: $red
								position: absolute
								bottom: 0
								left: -15px
							li.subItem
								width: 100%
								text-align: left
								.subA
									width: 100%
									padding: 16px 0
									font-size: 18px
							&.two_column
								width: calc(100% - 30px)
								li.subItem
									width: 100%
				.lang
					width: 310px
					margin: auto
					padding-left: 0px
					padding: 36px 0
					display: block
					.svg_box
						width: 17px
						height: 17px
					p
						font-size: 16px
						padding-left: 10px
					.subMenu
						display: none
						width: calc(100% - 30px)
						margin: auto
						border: none
						padding-bottom: 5px
						position: static
						transform: translateX(0%)
						.subItem
							width: 100%
							text-align: left
							.subA
								width: 100%
								padding: 16px 0
								font-size: 18px
				.close
					width: 50px
					height: 50px
					position: absolute
					top: 20px
					right: 20px
					transform: rotateZ(45deg)
					cursor: pointer
					&:before,&:after
						content: ''
						display: block
						border-radius: 2px
						background-color: #999
						+pstc0
					&:before
						width: 30px
						height: 4px
					&:after
						width: 4px
						height: 30px
			.ham
				display: block
				width: 20px
				height: 70px
				// background-color: #ccc
				cursor: pointer
				float: right
				position: relative
				.line
					background-color: #999
					height: 3px
					border-radius: 1.5px
					+pstc0
					&:nth-child(1)
						width: 18px
						transform: translate(-1px,-5px)
					&:nth-child(2)
						width: 20px
					&:nth-child(3)
						width: 16px
						transform: translate(-2px,5px)
	@include rwd(640px)
		.wrapper
			// width: 480px
			.main
				ul.mainMenu
					// width: 310px
	@include rwd(520px)
		.wrapper
			// width: 340px
			.main
				ul.mainMenu
					// width: 310px
	@include rwd(374px)
		.wrapper
			// width: 280px
			.main
				ul.mainMenu
					width: 250px
					padding-top: 60px
				.lang
					width: 250px
				.close
					right: 10px
</style>
