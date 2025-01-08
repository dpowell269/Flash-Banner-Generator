<template>
	<div>
		<!-- Editor Section -->
		<section class="editor">
			<h2>Percentage Off Sale Banner Editor</h2>
			<form @submit.prevent="generateHtml">

			<!-- Unique ID -->
			<div class="editable-fields">
					
					<!-- <div class="label-input-group">
						<label for="unique-id">Unique ID</label>
						<input v-model="bannerConfig.uniqueID" id="unique-id" type="text" />
					</div> -->
				</div>
				<!-- Background Image -->
				<div class="editable-fields">
					<div class="label-input-group">
						<label for="background-image">Background Image URL:</label>
						<input v-model="bannerConfig.backgroundImage" id="background-image" type="text" placeholder="Enter image URL" />
					</div>
					<div class="label-input-group">
						<label for="background-mobile-image">Mobile Image URL:</label>
						<input v-model="bannerConfig.backgroundMobileImage" id="background-mobile-image" type="text" placeholder="Enter image URL" />
					</div>
					<div class="label-input-group">
						<label for="background-link">Background Link:</label>
						<input v-model="bannerConfig.backgroundLink" id="background-link" type="text" />
					</div>
				</div>

				<!-- Date Controls -->
				<div class="editable-fields">
					<div class="label-input-group">
						<label for="start-date">Start Date:</label>
						<input v-model="bannerConfig.startDate" id="start-date" type="date" />
						<input v-model="bannerConfig.startTime" id="start-time" type="time" />
					</div>
					<div class="label-input-group">
						<label for="end-date">End Date:</label>
						<input v-model="bannerConfig.endDate" id="end-date" type="date" />
						<input v-model="bannerConfig.endTime" id="end-time" type="time" />
					</div>
				</div>

				<!-- Text Controls -->
				<div class="editable-fields">
  <div v-if="bannerConfig.thresholds && bannerConfig.thresholds.length > 0">
    <div class="label-input-group">
      <label>Threshold</label>
	  <input v-model="bannerConfig.thresholds[0].subtitle" placeholder="Subtitle (e.g., Member Exclusive)" />
      <input v-model="bannerConfig.thresholds[0].title" placeholder="Title (e.g., 20% Off)" />
    </div>
  </div>
</div>

				<div class="editable-fields">
					<!-- Shared Color Pickers -->
					<div class="label-input-group">
						<label for="title-color">Title Color</label>
						<input type="color" v-model="bannerConfig.sharedStyles.titleColor" id="title-color" />
					</div>

					<!-- font sizes -->
					<div class="label-input-group">
  <label for="title-font-size">Title Font Size</label>
  <input
    type="number"
    v-model="bannerConfig.sharedStyles.titleFontSize"
    id="title-font-size"
    min="8"
    max="100"
    step="1"
  />
</div>



					<div class="label-input-group">
						<label for="subtitle-color">Subtitle Color</label>
						<input type="color" v-model="bannerConfig.sharedStyles.subtitleColor" id="subtitle-color" />
					</div>
					<div class="label-input-group">
  <label for="subtitle-font-size">SubTitle Font Size</label>
  <input
    type="number"
    v-model="bannerConfig.sharedStyles.subtitleFontSize"
    id="subtitle-font-size"
    min="8"
    max="100"
    step="1"
  />
</div>
				</div>



				<!--  selected brands -->
				<div class="editable-fields">
					<div class="label-input-group">
						<label for="custom-text">Custom Text: (Optional)</label>
						<input v-model="bannerConfig.customText" id="custom-text" type="text" placeholder="e.g. Selected Brands" />
					</div>
					<div class="label-input-group">
						<label for="custom-text">Custom Text Color</label>
						<input type="color" v-model="bannerConfig.customTextColor" id="custom-text" />
					</div>
				</div>

				<!-- custom ends date -->
				<div class="editable-fields">
					<div class="label-input-group">
						<label for="custom-ends-text">Ends Date: </label>
						<input v-model="bannerConfig.customEndsText" id="custom-ends-text" type="text" placeholder="e.g., Ends 3rd December 9am" />
					</div>
					<div class="label-input-group">
						<label for="custom-text">End Date Color</label>
						<input type="color" v-model="bannerConfig.customEndsColor" id="custom-text" />
					</div>
				</div>

				<!-- Links & Misc -->
				<div class="editable-fields">
					<div class="label-input-group">
						<label for="shop-link-text">Shop button One *(Mandotary)</label>
						<input v-model="bannerConfig.shopText" id="shop-link" type="text" placeholder="shop all or shop mens" />
					</div>
					<div class="label-input-group">
						<label for="shop-link">CTA Link One:</label>
						<input v-model="bannerConfig.shopLink" id="shop-link" type="text" />
					</div>
					
					<div class="label-input-group">
						<label for="shop-link-textt">Shop Button Two: (Optional)</label>
						<input v-model="bannerConfig.shopTextt" id="shop-linkt" type="text" placeholder="shop womens" />
					</div>
					<div class="label-input-group">
						<label for="shop-link-two">CTA Link Two: (Optional)</label>
						<input v-model="bannerConfig.shopLinkTwo" id="shop-link-two" type="text" />
					</div>

					<div class="label-input-group">
						<label for="text-color">CTA Text Color:</label>
						<input type="color" v-model="bannerConfig.shopButtonStyles.textColor" id="text-color" />
					</div>

					<div class="label-input-group">
						<label for="border-color">CTA Border Color:</label>
						<input type="color" v-model="bannerConfig.shopButtonStyles.borderColor" id="border-color" />
					</div>

					<div class="label-input-group">
						<label for="background-color">CTA Background Color:</label>
						<input type="color" v-model="bannerConfig.shopButtonStyles.backgroundColor" id="background-color" />
					</div>

					<div class="label-input-group">
						<label for="hover-background-color">CTA Hover Background Color:</label>
						<input type="color" v-model="bannerConfig.shopButtonStyles.hoverBackgroundColor" id="hover-background-color" />
					</div>

					<div class="label-input-group">
						<label for="hover-background-color">CTA Hover Text Color:</label>
						<input type="color" v-model="bannerConfig.shopButtonStyles.hoverTextColor" id="hover-background-color" />
					</div>
				</div>

				<!-- T&Cs Editor -->
				<div class="editable-fields">
					<div class="label-input-group">
						<label for="tcs">T&Cs:</label>
						<input v-model="bannerConfig.termsAndConditions" id="tcs" placeholder="Enter terms and conditions" rows="3"></input>
					</div>

					<div class="label-input-group">
						<label for="tcs-color">T&Cs Color</label>
						<input type="color" v-model="bannerConfig.tcsTextColor" id="tcs-color" />
					</div>
				</div>

				<!-- Sign up links -->

				<div class="editable-fields">
					<div class="label-input-group">
					<label for="signUp-link-text">Sign Up  Text: (Optional)</label>
					<input
					v-model="bannerConfig.signUpLinkText"
					id="signUp-link-text"
					placeholder="Enter text"
					/>
				</div>
				<div class="label-input-group">
					<label for="signUp-color">Sign Up Color:</label>
					<input type="color" v-model="bannerConfig.signUpColor" id="signUp-color" />
				</div>
				<div class="label-input-group">
					<label for="signUp-link-url">Sign Up Link URL: (Optional)</label>
					<input
					v-model="bannerConfig.signUpLinkUrl"
					id="signUp-link-url"
					type="text"
					placeholder="Enter link URL"
					/>
				</div>
				</div>

				<!-- login -->

				<div class="editable-fields">
					<div class="label-input-group">
					<label for="login-link-text">Login Text: (Optional)</label>
					<input
					v-model="bannerConfig.loginLinkText"
					id="login-link-text"
					placeholder="Enter text"
					/>
				</div>
				
				<div class="label-input-group">
					<label for="login-link-url">login Link URL: (Optional)</label>
					<input
					v-model="bannerConfig.loginLinkUrl"
					id="login-link-url"
					type="text"
					placeholder="Enter link URL"
					/>
				</div>
				</div>

				<div class="editable-fields">
					<button type="submit" @click="handleExportClick">Export HTML</button>
				</div>

			</form>
		</section>

		<!-- Preview Section -->
		<section v-if="preview" class="preview">
			<h2 style="text-align: center">Banner Preview</h2>
			<section class="flash-sale" :class="{'hidden-component': !isWithinDateRange()}" :id="bannerConfig.uniqueID">

				<div
					class="flash-sale-container"
					:style="{
						'--background-image': `url('${bannerConfig.backgroundImage}')`,
						'--background-mobile-image': `url('${bannerConfig.backgroundMobileImage}')`,
					}"
				>
					<a :href="bannerConfig.backgroundLink" class="background-link"></a>
					<div class="thresholds">
						<h3 :style="{ color: bannerConfig.sharedStyles.subtitleColor,
							fontSize: bannerConfig.sharedStyles.subtitleFontSize + 'px'
						 }">
      {{ bannerConfig.thresholds[0].subtitle }}
    </h3>
  <div class="threshold">
	
    <h2 :style="{ color: bannerConfig.sharedStyles.titleColor,
		fontSize: bannerConfig.sharedStyles.titleFontSize + 'px'
	 }">
      {{ bannerConfig.thresholds[0].title }}
    </h2>
   
  </div>
</div>
<p v-if="bannerConfig.customText" :style="{color: bannerConfig.customTextColor}" class="selected-brands">{{ bannerConfig.customText }}</p>
					<p :style="{color: bannerConfig.customEndsColor}" class="end-date">{{ bannerConfig.customEndsText }}</p>
					<div
  class="shop-buttons"
  :style="{ '--grid-template-columns': bannerConfig.shopTextt ? '1fr 1fr' : '1fr' }"
>
						<a
						v-if="bannerConfig.shopText.trim() !== ''"
							:href="bannerConfig.shopLink"
							class="button"
							:style="{
								'--hover-bg-color': bannerConfig.shopButtonStyles.hoverBackgroundColor,
								'--hover-text-color': bannerConfig.shopButtonStyles.hoverTextColor,
								'--text-color': bannerConfig.shopButtonStyles.textColor,
								borderColor: bannerConfig.shopButtonStyles.borderColor,
								'--background-color': bannerConfig.shopButtonStyles.backgroundColor,
							}"
						>
							{{bannerConfig.shopText}}
						</a>
						<a
						v-if="bannerConfig.shopTextt.trim() !== ''"
							:href="bannerConfig.shopLinkTwo"
							class="button"
							:style="{
								'--hover-bg-color': bannerConfig.shopButtonStyles.hoverBackgroundColor,
								'--hover-text-color': bannerConfig.shopButtonStyles.hoverTextColor,
								'--text-color': bannerConfig.shopButtonStyles.textColor,
								borderColor: bannerConfig.shopButtonStyles.borderColor,
								'--background-color': bannerConfig.shopButtonStyles.backgroundColor,
							}"
						>
							{{bannerConfig.shopTextt}}
						</a>
	
					</div>
					<div 
  class="member-links" 
  v-if="bannerConfig.signUpLinkText || bannerConfig.loginLinkText"
>
  <a 
    :href="bannerConfig.signUpLinkUrl" 
    :style="{'--signUp-text-color': bannerConfig.signUpColor}" 
    class="underline-link"
  >
    {{ bannerConfig.signUpLinkText }}
  </a>
  <a 
    :href="bannerConfig.loginLinkUrl" 
    :style="{'--signUp-text-color': bannerConfig.signUpColor}" 
    class="underline-link"
  >
    {{ bannerConfig.loginLinkText }}
  </a>
</div>
					<p :style="{color: bannerConfig.tcsTextColor}" class="tcs">{{ bannerConfig.termsAndConditions }}</p>
				</div>
			</section>
		</section>

		<!-- Mobile Preview Section -->
	
		<section v-if="preview" class="mobile-preview">
			<h2 style="text-align: center">Mobile Preview</h2>
			<section class="mobile-flash-sale" :class="{'hidden-component': !isWithinDateRange()}" :id="bannerConfig.uniqueID">

				<div
					class="flash-sale-container"
					:style="{
						'--background-image': `url('${bannerConfig.backgroundImage}')`,
						'--background-mobile-image': `url('${bannerConfig.backgroundMobileImage}')`,
					}"
				>
					<a :href="bannerConfig.backgroundLink" class="background-link"></a>
					<div class="thresholds">
						<h3 :style="{ color: bannerConfig.sharedStyles.subtitleColor,
							fontSize: bannerConfig.sharedStyles.subtitleFontSize + 'px'
						 }">
      {{ bannerConfig.thresholds[0].subtitle }}
    </h3>
  <div class="threshold">
	
    <h2 :style="{ color: bannerConfig.sharedStyles.titleColor,
		fontSize: bannerConfig.sharedStyles.titleFontSize + 'px'
	 }">
      {{ bannerConfig.thresholds[0].title }}
    </h2>
   
  </div>
</div>
<p v-if="bannerConfig.customText" :style="{color: bannerConfig.customTextColor}" class="selected-brands">{{ bannerConfig.customText }}</p>
					<p :style="{color: bannerConfig.customEndsColor}" class="end-date">{{ bannerConfig.customEndsText }}</p>
					<div
  class="shop-buttons"
  :style="{ '--grid-template-columns': bannerConfig.shopTextt ? '1fr 1fr' : '1fr' }"
>
						<a
						v-if="bannerConfig.shopText.trim() !== ''"
							:href="bannerConfig.shopLink"
							class="button"
							:style="{
								'--hover-bg-color': bannerConfig.shopButtonStyles.hoverBackgroundColor,
								'--hover-text-color': bannerConfig.shopButtonStyles.hoverTextColor,
								'--text-color': bannerConfig.shopButtonStyles.textColor,
								borderColor: bannerConfig.shopButtonStyles.borderColor,
								'--background-color': bannerConfig.shopButtonStyles.backgroundColor,
							}"
						>
							{{bannerConfig.shopText}}
						</a>
						<a
						v-if="bannerConfig.shopTextt.trim() !== ''"
							:href="bannerConfig.shopLinkTwo"
							
							class="button"
							:style="{
								'--hover-bg-color': bannerConfig.shopButtonStyles.hoverBackgroundColor,
								'--hover-text-color': bannerConfig.shopButtonStyles.hoverTextColor,
								'--text-color': bannerConfig.shopButtonStyles.textColor,
								borderColor: bannerConfig.shopButtonStyles.borderColor,
								'--background-color': bannerConfig.shopButtonStyles.backgroundColor,
							}"
						>
							{{bannerConfig.shopTextt}}
						</a>

					</div>
					<div 
  class="member-links" 
  v-if="bannerConfig.signUpLinkText || bannerConfig.loginLinkText"
>
<a 
  v-if="bannerConfig.signUpLinkText" 
  :href="bannerConfig.signUpLinkUrl" 
  :style="{'--signUp-text-color': bannerConfig.signUpColor}" 
  class="underline-link"
>
  {{ bannerConfig.signUpLinkText }}
</a>
  <a 
  v-if="bannerConfig.loginLinkText" 
  :href="bannerConfig.loginLinkUrl" 
  :style="{'--signUp-text-color': bannerConfig.signUpColor}" 
  class="underline-link"
>
  {{ bannerConfig.loginLinkText }}
</a>
</div>
					<p :style="{color: bannerConfig.tcsTextColor}" class="tcs">{{ bannerConfig.termsAndConditions }}</p>
				</div>
			</section>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			preview: true,
			bannerConfig: {
				uniqueID: 'flash-sale',
				startDate: '2024-12-22',
				startTime: '17:00:00',
				endDate: '2025-12-31',
				endTime: '09:00:00',
				backgroundImage: 'https://media.theperfumeshop.com/pws/client/images/website/2024/black-friday/BF-BACKGROUND-DESKTOP.png',
				backgroundMobileImage: 'https://media.theperfumeshop.com/pws/client/images/website/2024/black-friday/BF-staggered-gold.jpg',
				backgroundLink: '/offers/all-offers/special-offers/c/W30041',
				shopLink: '/offers/all-offers/special-offers/c/W30041',
				shopLinkTwo: '/mens/offers',
				shopText: 'shop now',
				shopTextt: 'shop all',

				shopButtonStyles: {
					textColor: '#ffffff', // Default text color
					borderColor: '#c5a842', // Default border color
					backgroundColor: '#000000', // Default background color
					hoverBackgroundColor: '#ffffff',
					hoverTextColor: '#000000', // Default hover background color
				},
				footerText: 'ON SELECTED BRANDS',
				termsAndConditions: '*T&Cs apply',
				tcsTextColor: '#ffffff',
				thresholds: [
					{
						title: '20% Off £60 spend ',
						subtitle: 'Online Exclusive',
					},
					
				],
				sharedStyles: {
					titleColor: '#ffffff', // Global title color
					subtitleColor: '#ffffff', // Global subtitle color
					titleFontSize: 48,
					subtitleFontSize: 21,
				},
				customText: 'Selected Brands',
				customTextColor: '#ffffff',
				customEndsText: 'Ends 4pm 28th November',
				customEndsColor: '#ffffff',
				signUpLinkText: 'sign up',
				signUpLinkUrl: '/login#signup',
				signUpColor: '#ffffff',
				loginLinkText: 'login',
				loginLinkUrl: '/login',
				formattedDate: "",

			},
		};
	},
	computed: {
		formattedEndDate() {
			if (!this.bannerConfig.endDate || !this.bannerConfig.endTime) return '';
			return new Date(`${this.bannerConfig.endDate}T${this.bannerConfig.endTime}`).toLocaleString();
		},
	},
	methods: {
		isWithinDateRange() {
			const now = new Date();
			const start = new Date(`${this.bannerConfig.startDate}T${this.bannerConfig.startTime}`);
			const end = new Date(`${this.bannerConfig.endDate}T${this.bannerConfig.endTime}`);
			return now >= start && now <= end;
		},
		handleExportClick() {
			const now = new Date();

// Extract parts of the date and time
const day = now.toString().split(" ")[0]; // e.g., "Thu"
const month = now.toString().split(" ")[1]; // e.g., "Dec"
const date = now.getDate(); // e.g., 5
const year = now.getFullYear(); // e.g., 2024
let time = now.toTimeString().split(" ")[0]; // e.g., "16:06:43"

// Replace ":" with "-" in the time
time = time.replace(/:/g, "-"); // e.g., "16-06-43"

// Format the output
const formatted = [day, month, String(date).padStart(2, '0'), year, time].join("-").toLowerCase();
this.bannerConfig.formattedDate = formatted;

  },
		
 
		generateHtml() {
			const gridTemplateColumns = this.bannerConfig.shopTextt ? '1fr 1fr' : '1fr';
			const html =
				`
	  <style>
	.full-width-force {
		width: 100% !important;
		max-width: 1200px !important;
		margin: auto !important;
	}

	.hidden-component {
		display: none;
	}

	section.flash-sale {
		background: #ffffff;
		padding: 0 10px;
		border-radius: 4px;
		width: 100%;
		max-width: 1200px;
		margin: auto;
	}

	section.flash-sale .flash-sale-container {
		background: #ebe4dc;
		border-radius: 4px;
		width: 100%;
		max-width: 1200px;
		margin: 20px auto;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-repeat: no-repeat;
		background-image: url(${this.bannerConfig.backgroundMobileImage});
		background-size: cover;
		background-position-y: 0;
		position: relative;
		text-decoration: none;
	}

	@media only screen and (min-width: 768px) {
		section.flash-sale .flash-sale-container {
			background-size: cover;
			background-position-y: 0px;
			background-image: url(${this.bannerConfig.backgroundImage});
		}
	}

	section.flash-sale .flash-sale-container h2 {
		margin: 0 auto;
		padding: 0;
		color: ${this.bannerConfig.sharedStyles.titleColor};
		width: fit-content;
		text-align: center;
		box-sizing: border-box;
		font-family: DIN Condensed, DIN Condensed Bold, system-ui;
		font-size: ${this.bannerConfig.sharedStyles.titleFontSize}px;
		text-transform: uppercase;
	}

	section.flash-sale .flash-sale-container h3 {
		margin: 0 auto;
		padding: 0;
		color: ${this.bannerConfig.sharedStyles.subtitleColor};
		width: fit-content;
		text-align: center;
		box-sizing: border-box;
		font-family: Mark My Words Clean, system-ui;
		font-size: ${this.bannerConfig.sharedStyles.subtitleFontSize + 'px'};
		font-weight: 400;
	}

	section.flash-sale .flash-sale-container p.end-date {
		margin: 10px auto 10px;
		padding: 0;
		color: ${this.bannerConfig.customEndsColor};
		text-align: center;
		font-family: Muli, arial, helvetica, sans-serif;
		font-size: 14px;
		font-weight: 400;
	}

	section.flash-sale .flash-sale-container p.selected-brands {
		margin: 0 auto;
		padding: 5px 0 15px 0;
		color: ${this.bannerConfig.customTextColor};
		text-align: center;
		font-family: Muli, arial, helvetica, sans-serif;
		font-size: 14px;
		font-weight: 400;
	}

	section.flash-sale .flash-sale-container .shop-buttons {
		display: grid;
		grid-template-columns: ${gridTemplateColumns};
		gap: 10px;
	}

	@media screen and (max-width: 678px) {
	section.flash-sale .flash-sale-container .shop-buttons {
	grid-template-columns: 1fr;
	}
	}

	section.flash-sale .flash-sale-container a.button {
		display: block;
		background: ${this.bannerConfig.shopButtonStyles.backgroundColor};
		width: 100%;
		padding: 10px 25px;
		box-sizing: border-box;
		text-align: center;
		margin: 0px auto 0 auto;
		border-radius: 4px;
		text-decoration: none;
		color: ${this.bannerConfig.shopButtonStyles.textColor};
		font-family: Muli, arial, helvetica, sans-serif;
		font-size: 14px;
		text-transform: uppercase;
		cursor: pointer;
		border: solid 1px  ${this.bannerConfig.shopButtonStyles.borderColor};
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
		position: relative;
		overflow: hidden;
        z-index: 2;
	}

	section.flash-sale .flash-sale-container a.button:before {
		content: '';
		position: absolute;
		width: 100px;
		height: 100%;
		background-image: linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70%);
		top: 0;
		left: -100px;
		animation-name: shine;
		animation-duration: 4s;
		animation-delay: 1.5s;
		animation-iteration-count: infinite;
	}

	section.flash-sale .flash-sale-container a.button:hover {
		background: ${this.bannerConfig.shopButtonStyles.hoverBackgroundColor};
		color: ${this.bannerConfig.shopButtonStyles.hoverTextColor};
		cursor: pointer;
	}

	section.flash-sale .flash-sale-container p.tcs {
		margin: 20px auto 0;
		padding: 0;
		color: ${this.bannerConfig.tcsTextColor};
		text-align: center;
		font-family: Muli, arial, helvetica, sans-serif;
		font-size: 10px;
		font-weight: 400;
		position: absolute;
		bottom: 5px;
		right: 5px;
	}

	section.flash-sale .flash-sale-container .thresholds {
		display: flex;
		flex-direction: column;
		
		width: 100%;
		max-width: 650px;
	}

	section.flash-sale .flash-sale-container .thresholds .threshold {
	margin-top: 15px;
		animation-name: text-jump;
		animation-duration: 4s;
		animation-iteration-count: infinite;
	}

	section.flash-sale .flash-sale-container .thresholds .threshold:nth-of-type(2) {
		animation-delay: 0.5s;
	}

	section.flash-sale .flash-sale-container .thresholds .threshold:nth-of-type(3) {
		animation-delay: 1s;
	}

	

	@keyframes text-jump {
		0% {
			transform: translateY(0px);
		}
		10% {
			transform: translateY(-10px);
		}
		20% {
			transform: translateY(0px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	@keyframes shine {
		0% {
			left: -100px;
		}
		20% {
			left: 100%;
		}
		100% {
			left: 100%;
		}
	}

    a.background-link {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
 }
  
  section.flash-sale .flash-sale-container .member-links {
		margin: 10px auto 0;
		display: flex;
		gap: 20px;
		position: relative;
		z-index: 1;
	}

	section.flash-sale .flash-sale-container .member-links .underline-link {
		margin: 0px auto 0;
		padding: 0;
		color: ${this.bannerConfig.signUpColor};
		text-align: center;
		font-family: Muli, arial, helvetica, sans-serif;
		font-size: 14px;
		font-weight: 400;
		text-decoration: underline;
	}
</style>
        <section class="flash-sale hidden-component" id="${this.bannerConfig.formattedDate}">
          <div class="flash-sale-container">
            <a href="${this.bannerConfig.backgroundLink}" class="background-link"></a>
            <div class="thresholds">
				${this.bannerConfig.thresholds[0]?.subtitle ? `<h3>${this.bannerConfig.thresholds[0].subtitle}</h3>` : ''}
  <div class="threshold">
   
    <h2>${this.bannerConfig.thresholds[0]?.title || ''}</h2>
  </div>
</div>
			${this.bannerConfig.customText ? `<p class="selected-brands">${this.bannerConfig.customText}</p>` : ''}
            <p class="end-date">${this.bannerConfig.customEndsText}</p>
            <div class="shop-buttons">
             	${this.bannerConfig.shopText ? `<a href="${this.bannerConfig.shopLink}" class="button">${this.bannerConfig.shopText}</a>` : ''}
             	${this.bannerConfig.shopTextt ? `<a href="${this.bannerConfig.shopLinkTwo}" class="button">${this.bannerConfig.shopTextt}</a>` : ''}
            </div>
			<div class="member-links">
				${this.bannerConfig.signUpLinkText ? `<a class="underline-link" href="${this.bannerConfig.signUpLinkUrl}">${this.bannerConfig.signUpLinkText}</a>` : '' }
				${this.bannerConfig.loginLinkText ? `<a class="underline-link" href="${this.bannerConfig.loginLinkUrl}">${this.bannerConfig.loginLinkText}</a>` : '' }
			  </div>
            <p class="tcs">${this.bannerConfig.termsAndConditions}</p>
          </div>
        </section>
<sc` +
				`ript>
      document.querySelector('section.flash-sale').parentNode.parentNode.parentNode.classList.add('full-width-force');
	   document.querySelector('section.flash-sale').parentNode.parentNode.classList.add('full-width-force');

	function showComponentBetweenDates(startDate, startTime, endDate, endTime) {
		const now = new Date();
		const start = new Date(startDate + 'T' + startTime);
const end = new Date(endDate + 'T' + endTime);

		const component = document.getElementById('${this.bannerConfig.formattedDate}');

		if (now >= start && now <= end) {
			component.classList.remove('hidden-component');
		} else {
			component.classList.add('hidden-component');
		}
	}

	showComponentBetweenDates('${this.bannerConfig.startDate}', '${this.bannerConfig.startTime}', '${this.bannerConfig.endDate}', '${this.bannerConfig.endTime}');
  </sc` +
				`ript>
	
      `;
			const blob = new Blob([html], {type: 'text/html'});
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = 'flash-sale-percentage-off.html';
			link.click();
		},
	},
};
</script>

<style scoped>
.full-width-force {
	width: 100% !important;
	max-width: 1200px !important;
	margin: auto !important;
}

.hidden-component {
	display: none;
}

section.flash-sale {
	background: #ffffff;
	padding: 0 10px;
	border-radius: 4px;
	width: 100%;
	max-width: 1200px;
	margin: auto;
}

section.flash-sale .flash-sale-container {
	background: #ebe4dc;
	border-radius: 4px;
	width: 100%;
	max-width: 1200px;
	margin: 20px auto;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-repeat: no-repeat;
	background-image: var(--background-mobile-image);
	background-size: cover;
	background-position-y: 0;
	position: relative;
	text-decoration: none;
}

@media only screen and (min-width: 768px) {
	section.flash-sale .flash-sale-container {
		background-size: cover;
		background-position-y: 0px;
		background-image: var(--background-image);
	}
}

section.flash-sale .flash-sale-container h2 {
	margin: 0 auto;
	padding: 0;
	color: #fff;
	width: fit-content;
	text-align: center;
	box-sizing: border-box;
	font-family: DIN Condensed, DIN Condensed Bold, system-ui;
	font-size: 48px;
	text-transform: uppercase;
}

section.flash-sale .flash-sale-container h3 {
	margin: 0 auto;
	padding: 0;
	color: #fff;
	width: fit-content;
	text-align: center;
	box-sizing: border-box;
	font-family: Mark My Words Clean, system-ui;
	font-size: 21px;
	font-weight: 400;
}

section.flash-sale .flash-sale-container p.end-date {
	margin: 10px auto 10px;
	padding: 0;
	color: #fff;
	text-align: center;
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 14px;
	font-weight: 400;
}

section.flash-sale .flash-sale-container p.selected-brands {
	margin: 0 auto;
	padding: 0;
	color: #fff;
	text-align: center;
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 14px;
	font-weight: 400;
}

section.flash-sale .flash-sale-container .shop-buttons {
	display: grid;
	grid-template-columns: var(--grid-template-columns, 1fr);
	gap: 10px;
}

section.flash-sale .flash-sale-container a.button {
	display: block;
	background: var(--background-color);
	width: 100%;
	padding: 10px 25px;
	box-sizing: border-box;
	text-align: center;
	margin: 0px auto 0 auto;
	border-radius: 4px;
	text-decoration: none;
	color: var(--text-color);
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 14px;
	text-transform: uppercase;
	cursor: pointer;
	border: solid 1px #c5a842;
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 0.15s;
	position: relative;
	overflow: hidden;
	z-index: 2;
}

section.flash-sale .flash-sale-container a.button:before {
	content: '';
	position: absolute;
	width: 100px;
	height: 100%;
	background-image: linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70%);
	top: 0;
	left: -100px;
	animation-name: shine;
	animation-duration: 4s;
	animation-delay: 1.5s;
	animation-iteration-count: infinite;
}

section.flash-sale .flash-sale-container a.button:hover {
	background: var(--hover-bg-color);
	color: var(--hover-text-color); /* Updated to hover text color */
	cursor: pointer;
}

section.flash-sale .flash-sale-container p.tcs {
	margin: 20px auto 0;
	padding: 0;
	color: #fff;
	text-align: center;
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 10px;
	font-weight: 400;
	position: absolute;
	bottom: 5px;
	right: 5px;
}

section.flash-sale .flash-sale-container .thresholds {
	display: flex;
	flex-direction: column;
	
	width: 100%;
	max-width: 650px;
}

section.flash-sale .flash-sale-container .thresholds .threshold {
	margin-top: 15px;
	animation-name: text-jump;
	animation-duration: 4s;
	animation-iteration-count: infinite;
}

section.flash-sale .flash-sale-container .thresholds .threshold:nth-of-type(2) {
	animation-delay: 0.5s;
}

section.flash-sale .flash-sale-container .thresholds .threshold:nth-of-type(3) {
	animation-delay: 1s;
}



@keyframes text-jump {
	0% {
		transform: translateY(0px);
	}
	10% {
		transform: translateY(-10px);
	}
	20% {
		transform: translateY(0px);
	}
	100% {
		transform: translateY(0px);
	}
}

@keyframes shine {
	0% {
		left: -100px;
	}
	20% {
		left: 100%;
	}
	100% {
		left: 100%;
	}
}

a.background-link {
	position: absolute;
	display: block;
	width: 100%;
	height: 100%;
	z-index: 1;
}

section.flash-sale .flash-sale-container .member-links {
		margin: 10px auto 0;
		display: flex;
		gap: 20px;
		position: relative;
		z-index: 1;
	}

	section.flash-sale .flash-sale-container .member-links .underline-link {
		margin: 0px auto 0;
		padding: 0;
		color: var(--signUp-text-color);
		text-align: center;
		font-family: Muli, arial, helvetica, sans-serif;
		font-size: 14px;
		font-weight: 400;
		text-decoration: underline;
	}

	/* Mobile styles */

section.mobile-flash-sale {
	background: #ffffff;
	padding: 0 10px;
	border-radius: 4px;
	width: 100%;
	max-width: 600px;
	margin: auto;
}

section.mobile-flash-sale .flash-sale-container {
	background: #ebe4dc;
	border-radius: 4px;
	width: 100%;
	max-width: 1200px;
	margin: 20px auto;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-repeat: no-repeat;
	background-image: var(--background-mobile-image);
	background-size: cover;
	background-position-y: 0;
	position: relative;
	text-decoration: none;
}

@media only screen and (min-width: 768px) {
	section.mobile-flash-sale .flash-sale-container {
		background-size: cover;
		background-position-y: 0px;
	}
}

section.mobile-flash-sale .flash-sale-container h2 {
	margin: 0 auto;
	padding: 0;
	color: #fff;
	width: fit-content;
	text-align: center;
	box-sizing: border-box;
	font-family: DIN Condensed, DIN Condensed Bold, system-ui;
	font-size: 48px;
	text-transform: uppercase;
}

section.mobile-flash-sale .flash-sale-container h3 {
	margin: 0 auto;
	padding: 0;
	color: #fff;
	width: fit-content;
	text-align: center;
	box-sizing: border-box;
	font-family: Mark My Words Clean, system-ui;
	font-size: 21px;
	font-weight: 400;
}

section.mobile-flash-sale .flash-sale-container p.end-date {
	margin: 10px auto 10px;
	padding: 0;
	color: #fff;
	text-align: center;
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 14px;
	font-weight: 400;
}

section.mobile-flash-sale .flash-sale-container p.selected-brands {
	margin: 0 auto;
	padding: 0;
	color: #fff;
	text-align: center;
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 14px;
	font-weight: 400;
}

section.mobile-flash-sale .flash-sale-container .shop-buttons {
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
}

section.mobile-flash-sale .flash-sale-container a.button {
	display: block;
	background: var(--background-color);
	width: 100%;
	padding: 10px 25px;
	box-sizing: border-box;
	text-align: center;
	margin: 0px auto 0 auto;
	border-radius: 4px;
	text-decoration: none;
	color: var(--text-color);
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 14px;
	text-transform: uppercase;
	cursor: pointer;
	border: solid 1px #c5a842;
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 0.15s;
	position: relative;
	overflow: hidden;
	z-index: 2;
}

section.mobile-flash-sale .flash-sale-container a.button:before {
	content: '';
	position: absolute;
	width: 100px;
	height: 100%;
	background-image: linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70%);
	top: 0;
	left: -100px;
	animation-name: shine;
	animation-duration: 4s;
	animation-delay: 1.5s;
	animation-iteration-count: infinite;
}

section.mobile-flash-sale .flash-sale-container a.button:hover {
	background: var(--hover-bg-color);
	color: var(--hover-text-color); /* Updated to hover text color */
	cursor: pointer;
}

section.mobile-flash-sale .flash-sale-container p.tcs {
	margin: 20px auto 0;
	padding: 0;
	color: #fff;
	text-align: center;
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 10px;
	font-weight: 400;
	position: absolute;
	bottom: 5px;
	right: 5px;
}

section.mobile-flash-sale .flash-sale-container .thresholds {
	display: flex;
	flex-direction: column;
	
	width: 100%;
	max-width: 650px;
}

section.mobile-flash-sale .flash-sale-container .thresholds .threshold {
	margin-top: 15px;
	animation-name: text-jump;
	animation-duration: 4s;
	animation-iteration-count: infinite;
}

section.mobile-flash-sale .flash-sale-container .thresholds .threshold:nth-of-type(2) {
	animation-delay: 0.5s;
}

section.mobile-flash-sale .flash-sale-container .thresholds .threshold:nth-of-type(3) {
	animation-delay: 1s;
}



@keyframes text-jump {
	0% {
		transform: translateY(0px);
	}
	10% {
		transform: translateY(-10px);
	}
	20% {
		transform: translateY(0px);
	}
	100% {
		transform: translateY(0px);
	}
}

@keyframes shine {
	0% {
		left: -100px;
	}
	20% {
		left: 100%;
	}
	100% {
		left: 100%;
	}
}

a.background-link {
	position: absolute;
	display: block;
	width: 100%;
	height: 100%;
	z-index: 1;
}

section.mobile-flash-sale .flash-sale-container .member-links {
		margin: 10px auto 0;
		display: flex;
		gap: 20px;
		position: relative;
		z-index: 1;
	}

	section.mobile-flash-sale .flash-sale-container .member-links .underline-link {
		margin: 0px auto 0;
		padding: 0;
		color: var(--signUp-text-color);
		text-align: center;
		font-family: Muli, arial, helvetica, sans-serif;
		font-size: 14px;
		font-weight: 400;
		text-decoration: underline;
	}
</style>