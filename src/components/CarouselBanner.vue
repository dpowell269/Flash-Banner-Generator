<template>
	<div>
		<!-- Editor Section -->
		<section class="editor">
			<h2>Brand Carousel Sale Banner Editor</h2>
			<form @submit.prevent="generateHtml">
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

					<div class="label-input-group">
						<label for="subtitle-color">Subtitle Color</label>
						<input type="color" v-model="bannerConfig.sharedStyles.subtitleColor" id="subtitle-color" />
					</div>
				</div>

				<!--  selected brands -->
				<div class="editable-fields">
					<div class="label-input-group">
						<label for="custom-text">Custom Text</label>
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
						<label for="shop-link">CTA Link:</label>
						<input v-model="bannerConfig.shopLink" id="shop-link" type="text" />
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

                <!-- brand images -->
                <h3>Brand Images</h3>
        <div v-for="(image, index) in bannerConfig.brandImages" :key="index" class="brand-image-row">
          <input
            type="text"
            v-model="image.src"
            placeholder="Image URL"
          />
          <input
            type="text"
            v-model="image.link"
            placeholder="Link URL"
          />
          <button @click.prevent="removeImage(index)">-</button>
        </div>
        <button @click.prevent="addImage">+ Add Image</button>

				<!-- T&Cs Editor -->
				<div class="editable-fields">
					<div class="label-input-group">
						<label for="tcs">T&Cs:</label>
						<input v-model="bannerConfig.termsAndConditions" id="tcs" placeholder="Enter terms and conditions" rows="3"></input>
					</div>

					<div class="label-input-group">
						<label for="tcs-color">T&Cs Color</label>
						<input type="color" v-model="bannerConfig.tcsTextColor"  id="tcs-color" />
					</div>
				</div>

				<div class="editable-fields">
					
					<button type="submit">Export HTML</button>
				</div>
			</form>
		</section>

		<!-- Preview Section -->
		<section v-if="preview" class="preview">
			<h2 style="text-align: center">Banner Preview</h2>
			<section class="flash-sale" :class="{'hidden-component': !isWithinDateRange()}" id="timed-flash-sale">
				<div
					class="flash-sale-container"
					:style="{
						'--background-image': `url('${bannerConfig.backgroundImage}')`,
						'--background-mobile-image': `url('${bannerConfig.backgroundMobileImage}')`,
					}"
				>
					<a :href="bannerConfig.backgroundLink" class="background-link"></a>
					<div class="s">
						<h3 :style="{ color: bannerConfig.sharedStyles.subtitleColor }">
                         {{ bannerConfig.thresholds[0].subtitle }}
                                    </h3>
                        <h2 :style="{ color: bannerConfig.sharedStyles.titleColor }">
                              {{ bannerConfig.thresholds[0].title }}
                         </h2>

                             <p :style="{color: bannerConfig.customTextColor}" class="end-date">{{ bannerConfig.customText }}</p>
				        	<p :style="{color: bannerConfig.customEndsColor}" class="end-date">{{ bannerConfig.customEndsText }}</p>
				        	<div class="shop-buttons">
					    	<a
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
							Shop All
						</a>
					</div>
                  
              
                </div>
                <div class="brandSplide splide">
              <div class="brand-container splide__track">
                <div class="splide__list">
                  <div
                    class="brand-tile splide__slide"
                    v-for="(image, index) in bannerConfig.brandImages"
                    :key="index"
                  >
                    <a :href="image.link" class="visual">
                      <img :src="image.src" alt="" />
                    </a>
                  </div>
                </div>
              </div>
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
				startDate: '2024-10-20',
				startTime: '17:00:00',
				endDate: '2024-12-22',
				endTime: '09:00:00',
				backgroundImage: 'https://media.theperfumeshop.com/pws/client/images/website/2024/black-friday/BF-BACKGROUND-DESKTOP.png',
				backgroundMobileImage: 'https://media.theperfumeshop.com/pws/client/images/website/2024/black-friday/BF-staggered-gold.jpg',
				backgroundLink: '/offers/all-offers/special-offers/c/W30041',
				shopLink: '/offers/all-offers/special-offers/c/W30041',
				shopButtonStyles: {
					textColor: '#ffffff', // Default text color
					borderColor: '#c5a842', // Default border color
					backgroundColor: '#000000', // Default background color
					hoverBackgroundColor: '#ffffff',
					hoverTextColor: '#000', // Default hover background color
				},
				footerText: 'ON SELECTED BRANDS',
				termsAndConditions: '*T&Cs apply',
				tcsTextColor: '#ffffff',
                customTextColor: '#ffffff',
                customEndsColor: '#ffffff',
				thresholds: [
					{
						title: '20% Off £60 spend ',
						subtitle: 'Online Exclusive',
					},
					
				],
				sharedStyles: {
					titleColor: '#fff', 
					subtitleColor: '#fff',
				},
                brandImages: [
          { src: 'https://media.theperfumeshop.com/medias/sys_master/brand-images/ha2/ha6/8918694330398/rabanne_logo_white/rabanne-logo-white.png',
           link: '/rabanne/b/59'
         },
           {
              src: "https://media.theperfumeshop.com/medias/?context=bWFzdGVyfGJyYW5kLWltYWdlc3w4NTIzfGltYWdlL2pwZWd8YUdVNEwyaGlOeTg0T0RRek1qRTNPREk1T1RFNHxhYmI2NzkxZjkzZDQ3MWIzMGRjZThjZmFmN2UzYmZmY2I1OTZkMGEyNTVlYmZjY2RkYTkwMTdlYzllZGRhOTE4",
              link: "/lancome/b/49",
            },
            {
              src: "https://media.theperfumeshop.com/medias/?context=bWFzdGVyfGJyYW5kLWltYWdlc3wxOTE3MnxpbWFnZS9qcGVnfGFESTBMMmd4Tmk4NE9EUXlOREU1TlRNMU9UQXl8ZTE3NmRkOWY2ODg1YzI5ODVmMWQxMjU0YjVkNDE5YzRmMTA5M2RlZDA1Nzk0MjkyZTA2NjUxZmZhNTI0NTk2MQ",
              link: "/dolce",
            },
            {
              src: "https://media.theperfumeshop.com/medias/?context=bWFzdGVyfGJyYW5kLWltYWdlc3wxMjgyMHxpbWFnZS9qcGVnfGFEazBMMmc1WlM4NE9EUXlOREl4TWpjeU5qQTJ8M2RhODhlMDA5ZDRjMzBiMTNiODBkNGVhN2E1OTMzMDUzNjI1MzExMjkwM2JiZDQ3ZWQwZTMyOWJiZDlkMzMxMw",
              link: "/jimmy-choo",
            },
            {
              src: "https://media.theperfumeshop.com/medias/?context=bWFzdGVyfGJyYW5kLWltYWdlc3wxMDE2NHxpbWFnZS9qcGVnfGFEaG1MMmhtTkM4NE9EUXlOREl3T0RFek9EVTB8MWU2NjI3YWQ5NTRhMTY4Mjk5YjY3YTRiNmEzYjI5ZWFjNWQ2YWExN2Y5YzZhN2JhN2E2NjMwNmE2NTA1OWY3Nw",
              link: "/givenchy",
            },
            {
              src: "https://media.theperfumeshop.com/medias/?context=bWFzdGVyfGJyYW5kLWltYWdlc3wxMDE2NHxpbWFnZS9qcGVnfGFEaG1MMmhtTkM4NE9EUXlOREl3T0RFek9EVTB8MWU2NjI3YWQ5NTRhMTY4Mjk5YjY3YTRiNmEzYjI5ZWFjNWQ2YWExN2Y5YzZhN2JhN2E2NjMwNmE2NTA1OWY3Nw",
              link: "/givenchy",
            },
            {
              src: "https://media.theperfumeshop.com/medias/sys_master/brand-images/h93/h2d/8904514175006/LOGOBNEW/LOGOBNEW.png",
              link: "/versace",
            },
        ],

				customText: 'Selected Brands',
				customEndsText: 'Ends 4pm 28th November',
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
        addImage() {
        this.bannerConfig.brandImages.push({ src: "", link: "" });
      },
      removeImage(index) {
        this.bannerConfig.brandImages.splice(index, 1);
      },
		generateHtml() {
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
		display: grid;
		grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
		background-repeat: no-repeat;
		background-image: var(--bg-image);
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
            grid-template-columns: 1fr 1.5fr;
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
		font-size: 48px;
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
		font-size: 21px;
		font-weight: 400;
        /* transform: rotate(-5deg); */
	}

	section.flash-sale .flash-sale-container p.end-date {
		margin: 20px auto 0;
		padding: 0;
		color: ${this.bannerConfig.customEndsColor};
		text-align: center;
		font-family: Muli, arial, helvetica, sans-serif;
		font-size: 14px;
		font-weight: 400;
	}

	section.flash-sale .flash-sale-container p.selected-brands {
		margin: 20px auto 0;
		padding: 0;
		color: ${this.bannerConfig.customTextColor};
		text-align: center;
		font-family: Muli, arial, helvetica, sans-serif;
		font-size: 14px;
		font-weight: 400;
	}

	section.flash-sale .flash-sale-container .shop-buttons {
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;
	}

	section.flash-sale .flash-sale-container a.button {
		display: block;
		background: ${this.bannerConfig.shopButtonStyles.backgroundColor};
		width: fit-content;
		padding: 10px 25px;
		box-sizing: border-box;
		text-align: center;
		margin: 20px auto 0 auto;
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
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px;
		width: 100%;
		max-width: 650px;
	}

	section.flash-sale .flash-sale-container .thresholds .threshold {
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

	@media only screen and (min-width: 768px) {
		section.flash-sale .flash-sale-container .thresholds {
			grid-template-columns: 1fr;
		}
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
  section.flash-sale .flash-sale-container .brand-tile {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section.flash-sale .flash-sale-container .visual {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section.flash-sale .flash-sale-container .visual img {
		width: 80%;
		max-width: 200px;
		display: block;
		/* filter: invert(1); */
	}

</style>
        <section class="flash-sale hidden-component" id="timed-flash-sale">
          <div class="flash-sale-container">
            <a href="${this.bannerConfig.backgroundLink}" class="background-link"></a>
            <div class="">
				${this.bannerConfig.thresholds[0]?.subtitle ? `<h3>${this.bannerConfig.thresholds[0].subtitle}</h3>` : ''}
  
   
    <h2>${this.bannerConfig.thresholds[0]?.title || ''}</h2>


			${this.bannerConfig.customText ? `<p class="selected-brands">${this.bannerConfig.customText}</p>` : ''}
            <p class="end-date">${this.bannerConfig.customEndsText}</p>
            
              <a href="${this.bannerConfig.shopLink}" class="button">Shop All</a>
             </div>
            <p class="tcs">${this.bannerConfig.termsAndConditions}</p>
         
           <div class="brandSplide splide">
            <div class="brand-container splide__track">
              <div class="splide__list">
                ${this.bannerConfig.brandImages.map(image => `
                  <div class="brand-tile splide__slide">
                    <a href="${image.link}" class="visual">
                      <img src="${image.src}" alt="" />
                    </a>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
        </section>

        <sc` +
				`ript src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js">
                </sc` +
				`ript>
<sc` +
				`ript>
      document.querySelector('section.flash-sale').parentNode.parentNode.parentNode.classList.add('full-width-force');
	   document.querySelector('section.flash-sale').parentNode.parentNode.classList.add('full-width-force');

	function showComponentBetweenDates(startDate, startTime, endDate, endTime) {
		const now = new Date();
		const start = new Date(startDate + 'T' + startTime);
const end = new Date(endDate + 'T' + endTime);

		const component = document.getElementById('timed-flash-sale');

		if (now >= start && now <= end) {
			component.classList.remove('hidden-component');
		} else {
			component.classList.add('hidden-component');
		}
	}

	showComponentBetweenDates('${this.bannerConfig.startDate}', '${this.bannerConfig.startTime}', '${this.bannerConfig.endDate}', '${this.bannerConfig.endTime}');

    	new Splide('.splide.brandSplide', {
		type: 'loop',
		arrows: (boolean = false),
		rewindByDrag: (boolean = true),
		pagination: (boolean = false),
		
		perPage: (number = 3),
		autoScroll: {
			speed: 1,
			autoStart: (boolean = true),
			rewind: (boolean = true),
			pauseOnFocus: (boolean = false),
		},
	}).mount(window.splide.Extensions);
  </sc` +
				`ript>
	
      `;
			const blob = new Blob([html], {type: 'text/html'});
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = 'flash-sale-banner.html';
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
	display: grid;
    grid-template-columns: 1fr 1.5fr;
	background-repeat: no-repeat;
	background-image: var(--background-mobile-image);
	/* background-image: url('https://media.theperfumeshop.com/pws/client/images/website/2024/black-friday/BF-BACKGROUND-DESKTOP.png'); */
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
	/* transform: rotate(-5deg); */
}

section.flash-sale .flash-sale-container p.end-date {
	margin: 20px auto 0;
	padding: 0;
	color: #fff;
	text-align: center;
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 14px;
	font-weight: 400;
}

section.flash-sale .flash-sale-container p.selected-brands {
	margin: 20px auto 0;
	padding: 0;
	color: #fff;
	text-align: center;
	font-family: Muli, arial, helvetica, sans-serif;
	font-size: 14px;
	font-weight: 400;
}

section.flash-sale .flash-sale-container .shop-buttons {
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
}

section.flash-sale .flash-sale-container a.button {
	display: block;
	background: var(--background-color);
	width: git-content;
	padding: 10px 25px;
	box-sizing: border-box;
	text-align: center;
	margin: 20px auto 0 auto;
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
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;
	width: 100%;
	max-width: 650px;
}

section.flash-sale .flash-sale-container .thresholds .threshold {
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

@media only screen and (min-width: 768px) {
	section.flash-sale .flash-sale-container .thresholds {
		grid-template-columns: 1fr;
	}
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
section.flash-sale .flash-sale-container .brand-tile {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section.flash-sale .flash-sale-container .visual {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section.flash-sale .flash-sale-container .visual img {
		width: 80%;
		max-width: 200px;
		display: block;
		/* filter: invert(1); */
	}
</style>