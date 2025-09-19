export type ServiceCategory =
  | 'Facial Treatments'
  | 'Therapeutic Massage'
  | 'Upgrades'
  | 'Advanced Aesthetic'
  | 'Body Treatments'
  | 'Brow & Lash'
  | 'Waxing Hair Removal Service';

export interface ServiceItem {
  slug: string;
  title: string;
  category: ServiceCategory;
  price: string;
  duration?: string;
  excerpt: string;
  description: string;
  highlights?: string[];
  featured?: boolean;
  isNew?: boolean;
  isMostRequested?: boolean;
}

export const services: ServiceItem[] = [
  // New Services
  {
    slug: 'prf-under-eyes',
    title: 'PRF Under Eyes',
    category: 'Advanced Aesthetic',
    price: '$300',
    excerpt: 'Erase dark circles and hollows naturally with PRF under-eye rejuvenation that uses your own healing cells.',
    description:
      'Tired of looking tired? PRF (Platelet Rich Fibrin) Under Eye Treatment is a game-changer for dark circles, hollows, and fine lines—using your body’s own healing power to restore a bright, youthful gaze.',
    highlights: [
      'Natural fix with no fillers or synthetic additives—just your own healing cells.',
      'Improves thin, crepey skin and reduces shadowy discoloration.',
      'Stimulates tissue growth to subtly restore volume and fill hollows.',
      'Minimal downtime with slight redness or swelling fading within 24–48 hours.'
    ],
    isNew: true,
    featured: true
  },
  {
    slug: 'prf-facial',
    title: 'PRF (Platelet Rich Fibrin) Facial',
    category: 'Advanced Aesthetic',
    price: '$650',
    excerpt: 'Harness concentrated growth factors for all-over rejuvenation, hair restoration, and accelerated healing.',
    description:
      'Your skin’s natural boost! PRF is an advanced regenerative treatment that uses concentrated growth factors from your blood to rejuvenate skin, hair, and even accelerate post-procedure recovery. Unlike traditional PRP, PRF’s fibrin matrix releases growth factors longer and more effectively, promoting natural collagen production and tissue repair.',
    highlights: [
      'Skin rejuvenation that softens wrinkles, scars, and dullness.',
      'Supports hair restoration by stimulating follicles and combating thinning.',
      'Revives under-eye darkness and crepey texture.',
      'Enhances healing after microneedling, lasers, or surgical procedures.'
    ],
    isNew: true,
    featured: true
  },

  // Most Requested Treatments
  {
    slug: 'couples-swedish-massage-50',
    title: 'Couples Swedish Massage 50 Min',
    category: 'Therapeutic Massage',
    price: '$318',
    duration: '50 min',
    excerpt: 'Experience a Swedish massage together in the private Bamboo Suite with optional wine and gourmet platter.',
    description:
      'Transform your spa day into a lavish escape with our Bamboo Suite upgrade. Whether you’re unwinding with friends, family, or your special someone, relish the Swedish Massage in the serene and private ambiance of the Bamboo Suite. Elevate your experience further with our delectable mixed platter featuring fruits, cheeses, chocolates, and wine—all served exclusively in the co-ed Oasis Lounge.',
    isMostRequested: true,
    featured: true
  },
  {
    slug: 'couples-restorative-deep-tissue-80',
    title: 'Couples Restorative Deep Tissue Massage 80 Min',
    category: 'Therapeutic Massage',
    price: '$438',
    duration: '80 min',
    excerpt: 'Indulge in a deep tissue duo massage with the option to add wine, gourmet platter, and Bamboo Suite upgrade.',
    description:
      'Immerse yourself in pure indulgence with our 80-minute Deep Tissue Massage, expertly designed to target tension and provide deep relaxation. Add our exclusive Wine, Platter, and Bamboo Suite Room Upgrade to sip on fine wine, savor a delectable platter of fruits, cheese, and chocolates, and bask in the serene ambiance of our Bamboo Suite—a luxurious escape tailored to perfection.',
    isMostRequested: true
  },
  {
    slug: 'custom-facial-50',
    title: 'Custom Facial 50 Min',
    category: 'Facial Treatments',
    price: '$169',
    duration: '50 min',
    excerpt: 'A bespoke facial tailored to exfoliation, acne relief, hydration, or any skin goals you bring to the table.',
    description:
      'Ready for a facial experience as unique as you are? Our custom facials are like a skincare symphony tailored to play all the right notes for your skin needs and desires. Need exfoliation? Check. Acne treatment? Absolutely. Moisturization, deep cleansing, or a combo platter? Consider it done! Say goodbye to one-size-fits-all and hello to a personalized treatment that caters to all skin types.',
    isMostRequested: true,
    featured: true
  },
  {
    slug: 'essence-signature-facelift-facial-50',
    title: 'Essence Signature Facelift Facial 50 Min',
    category: 'Facial Treatments',
    price: '$195',
    duration: '50 min',
    excerpt: 'A four-layer vitamin-rich powerhouse facial that brightens, tightens, and leaves skin red-carpet ready.',
    description:
      'Picture this: a 4-layer extravaganza that kicks dullness to the curb with vitamin C, alpha and beta hydroxy acids, and enzymes. It’s like sending your skin to a spa party, and it’s the guest of honor. In just 50 minutes, watch your face transform from “meh” to “wowza.” Tightened, brighter, and so good even your mirror will do a double-take.',
    isMostRequested: true
  },
  {
    slug: 'body-scrub-royal-fijian-ritual-85',
    title: 'Body Scrub 85 Min',
    category: 'Body Treatments',
    price: '$189',
    duration: '85 min',
    excerpt: 'The Royal Fijian Ritual blends honey, coconut milk, and drift nut oils for a head-to-toe glow.',
    description:
      'Indulge in the regal magnificence of our Royal Fijian Ritual—where Fijian honey and coconut milk join forces for a skincare extravaganza. Organic cane sugar and exotic drift nut oils polish skin to perfection before a honey masque packed with antioxidants and vitamins is massaged in with warm stones.',
    isMostRequested: true
  },

  // Facial Treatments
  {
    slug: 'acne-facial-50',
    title: 'Acne Facial 50 Min',
    category: 'Facial Treatments',
    price: '$159',
    duration: '50 min',
    excerpt: 'Clear congested skin with a ZO Stimulator Peel and sulfur mask that keeps breakouts in check.',
    description:
      'Acne isn’t just a teenage saga—it’s a timeless tale. Featuring the ZO Stimulator Peel and a breakout-busting sulfur mask, this treatment calms inflammation, clears congestion, and keeps skin camera-ready.'
  },
  {
    slug: 'brightening-facial-50',
    title: 'Brightening Facial 50 Min',
    category: 'Facial Treatments',
    price: '$155',
    duration: '50 min',
    excerpt: 'Vitamin C, algae patches, and thermal organic clay revive sun-stressed, city-tired complexions.',
    description:
      'Unleash the power of antioxidants with our Brightening Vitamin C treatment. Packed with vitamin C, algae patches, and thermal organic clay, this facial revitalizes tired complexions—perfect before or after time in the sun or battling city pollution.'
  },
  {
    slug: 'collagen-sublime-eye-contour-30',
    title: 'Collagen Sublime Eye Contour Treatment 30 Min',
    category: 'Facial Treatments',
    price: '$77',
    duration: '30 min',
    excerpt: 'A four-step eye rejuvenation ritual that sends undereye bags packing.',
    description:
      'We’ve concocted a 4-step masterpiece that’s basically a spa day for your eyes. Each phase revitalizes, nourishes, and delivers anti-aging wizardry so crow’s feet and undereye bags take a permanent vacation.'
  },
  {
    slug: 'custom-peel-30',
    title: 'Custom Peel 30 Min',
    category: 'Facial Treatments',
    price: 'Starting at $130',
    duration: '30 min',
    excerpt: 'A results-driven peel for dehydrated, pigmented, uneven, or mature skin needing a quick reset.',
    description:
      'This results-driven peel targets dehydration, pigmentation, uneven tone, and maturity concerns. Enjoy a full 30-minute peel followed by masking and treatment to soften fine lines, wrinkles, spots, and blemishes.'
  },
  {
    slug: 'deep-pore-cleansing-facial-50',
    title: 'Deep Pore Cleansing Facial 50 Min',
    category: 'Facial Treatments',
    price: '$125',
    duration: '50 min',
    excerpt: 'Detox congested skin with a deep cleanse that kicks cellular debris and leftover makeup to the curb.',
    description:
      'Skin may look clean but pores tell another story. This intensive facial dives deep to banish cellular debris, cosmetics buildup, and dead skin cells so complexion stays bright, clear, and confident.'
  },
  {
    slug: 'essence-signature-facelift-peel-30',
    title: 'Essence Signature Facelift Peel 30 Min',
    category: 'Facial Treatments',
    price: '$129',
    duration: '30 min',
    excerpt: 'An organic 4-layer peel with vitamin C, alpha and beta hydroxy acids for instant brightness.',
    description:
      'Our one-of-a-kind Essence Facelift Peel transforms skin in just one sitting. Suitable for even sensitive complexions, this 4-layer peel delivers vitamin C, alpha and beta hydroxy acids, and enzymes to gently exfoliate and tighten.'
  },
  {
    slug: 'firming-facial-60',
    title: 'Firming Facial 60 Min',
    category: 'Facial Treatments',
    price: '$215',
    duration: '60 min',
    excerpt: 'A visible lifting and firming clinical facial that hydrates, revitalizes, and preps skin for big moments.',
    description:
      'This visible lifting and firming clinical treatment drenches skin in hydration through four progressive steps that cleanse, energize, and reclaim lost firmness—ideal before weddings, events, or any camera-ready moment.'
  },
  {
    slug: 'hydrofacial-60',
    title: 'Hydrofacial 60 Min',
    category: 'Facial Treatments',
    price: '$229',
    duration: '60 min',
    excerpt: 'Oxygen and water power combine to smooth, tone, and energize skin for instant luminosity.',
    description:
      'The Hydro Facial promotes collagen and elastin production by delivering a pressurized stream of saline solution or serum. Expect smoother, toned, far-from-dull skin after targeting fine lines, wrinkles, hyperpigmentation, acne, and excess oil.'
  },
  {
    slug: 'hydrating-facial-50',
    title: 'Hydrating Facial 50 Min',
    category: 'Facial Treatments',
    price: '$159',
    duration: '50 min',
    excerpt: 'A thermo-cooling oasis that calms redness and drenches sensitive, dehydrated skin in hydration.',
    description:
      'Our soothing clinical treatment delivers immediate and lasting hydration with a thermo-cooling finish. It calms redness and pampers sensitive, dehydrated skin with vibrant, refreshed results.'
  },
  {
    slug: 'jet-plasma-facial-30',
    title: 'Jet Plasma Facial 30 Min',
    category: 'Facial Treatments',
    price: '$350',
    duration: '30 min',
    excerpt: 'No-downtime plasma technology that addresses fine lines, sagging, hyperpigmentation, and acne.',
    description:
      'Jet Plasma Treatment is the skincare game-changer for fine lines, sagging, hyperpigmentation, acne scars, and dullness—without downtime. Safe for all skin types and ready to deliver a universal glow.'
  },
  {
    slug: 'microdermabrasion-facial-50',
    title: 'Microdermabrasion Facial 50 Min',
    category: 'Facial Treatments',
    price: '$125',
    duration: '50 min',
    excerpt: 'Gentle crystal resurfacing that fades sun damage, scarring, and uneven tone without irritation.',
    description:
      'This gentle yet effective aluminum oxide crystal treatment removes the outer skin layer while respecting integrity. Ideal for sun damage, superficial scarring, wrinkles, age spots, uneven tone, and enlarged pores.'
  },
  {
    slug: 'microdermabrasion-chest-45',
    title: 'Microdermabrasion - Chest 45 Min',
    category: 'Facial Treatments',
    price: '$91',
    duration: '45 min',
    excerpt: 'Extend microdermabrasion benefits to the chest for silky, spot-free décolletage.',
    description:
      'Pressure-controlled microdermabrasion crystals sweep away sun damage and superficial imperfections on the chest, refining texture and tone without downtime.'
  },
  {
    slug: 'microdermabrasion-neck-20',
    title: 'Microdermabrasion - Neck 20 Min',
    category: 'Facial Treatments',
    price: '$59',
    duration: '20 min',
    excerpt: 'Target neck texture with a quick resurfacing polish that keeps skin smooth and even.',
    description:
      'A focused neck treatment that softens fine lines, uneven tone, and surface texture using gentle, pressure-controlled crystals.'
  },
  {
    slug: 'oxygen-facial-60',
    title: 'Oxygen Facial 60 Min',
    category: 'Facial Treatments',
    price: '$159',
    duration: '60 min',
    excerpt: 'Breathes new life into tired skin cells for deep hydration and a luminous finish.',
    description:
      'This extraordinary facial revitalizes fatigued skin cells, restoring plumpness and enduring hydration for a luminous, youthful glow.'
  },
  {
    slug: 'red-carpet-collagen-facial-80',
    title: 'Red Carpet Clinical Facial Powerful Collagen Anti-Wrinkle 80 Min',
    category: 'Facial Treatments',
    price: '$215',
    duration: '80 min',
    excerpt: 'An anti-aging odyssey that drenches skin in hydration while toning, firming, and smoothing fine lines.',
    description:
      'Our powerful collagen anti-wrinkle facial hydrates, strengthens, and tones skin so fine lines and wrinkles take a back seat. Leave with a vibrant, red-carpet radiance.'
  },
  {
    slug: 'red-carpet-signature-anti-aging-60',
    title: 'Red Carpet Clinical Facial Signature Anti-Aging 60 Min',
    category: 'Facial Treatments',
    price: '$199',
    duration: '60 min',
    excerpt: 'Relax expression lines and unveil instant, long-lasting smoothing with this signature treatment.',
    description:
      'Say goodbye to expression lines with a treatment that relaxes facial tension, visibly reduces wrinkles, and leaves skin instantly younger-looking.'
  },
  {
    slug: 'rf-microneedling-facial-75',
    title: 'RF Micro-Needling Facial 75 Min',
    category: 'Facial Treatments',
    price: '$399',
    duration: '75 min',
    excerpt: 'Radio-frequency energy plus microneedling tighten, tone, and smooth for a lifted complexion.',
    description:
      'Embark on a high-tech anti-aging journey where RF energy and microneedling unite to tighten, tone, and visibly smooth skin for a radiant, youthful finish.'
  },
  {
    slug: 'teen-facial-30',
    title: 'Teen Facial 30 Min',
    category: 'Facial Treatments',
    price: '$85',
    duration: '30 min',
    excerpt: 'A teen-tailored facial that cleanses, exfoliates, and hydrates while calming acne-prone skin.',
    description:
      'Designed for teenage skin navigating hormones and busy schedules, this facial delivers deep cleansing, toning, exfoliation, and moisturizing to keep complexions refreshed and balanced.'
  },

  // Therapeutic Massage
  {
    slug: 'bamboo-massage-50',
    title: 'Bamboo Massage 50 Min',
    category: 'Therapeutic Massage',
    price: '$125',
    duration: '50 min',
    excerpt: 'Warm bamboo rods glide along muscles for a modern, digitally detoxing massage experience.',
    description:
      'Swipe away tension with warm bamboo rods and cutting-edge relaxation techniques designed to leave you feeling digitally rejuvenated and deeply relaxed.'
  },
  {
    slug: 'bamboo-massage-80',
    title: 'Bamboo Massage 80 Min',
    category: 'Therapeutic Massage',
    price: '$165',
    duration: '80 min',
    excerpt: 'An extended bamboo ritual that melts stress and refreshes body and mind.',
    description:
      'Enjoy extra time with warm bamboo gliding along fatigued muscles, promoting circulation and full-body relaxation.'
  },
  {
    slug: 'cupping-massage-50',
    title: 'Cupping Massage 50 Min',
    category: 'Therapeutic Massage',
    price: '$109',
    duration: '50 min',
    excerpt: 'Silicone cups create gentle suction to release tension and boost circulation.',
    description:
      'Experience a playful yet effective massage where silicone cups create gentle suction, releasing tension, improving circulation, and leaving muscles lighter and happier.'
  },
  {
    slug: 'cupping-massage-80',
    title: 'Cupping Massage 80 Min',
    category: 'Therapeutic Massage',
    price: '$145',
    duration: '80 min',
    excerpt: 'Extended cupping session for deep relief, detox, and total-body lightness.',
    description:
      'Spend extra time unwinding as silicone cups glide and lift, promoting detoxification and long-lasting relaxation.'
  },
  {
    slug: 'foot-reflexology-30',
    title: 'Foot Reflexology 30 Min',
    category: 'Therapeutic Massage',
    price: '$75',
    duration: '30 min',
    excerpt: 'Stimulate nerve function, boost energy, and enter deep relaxation through focused footwork.',
    description:
      'Our reflexology session stimulates nerve function, boosts circulation, induces deep relaxation, encourages recovery, and even helps with better sleep.'
  },
  {
    slug: 'foot-reflexology-45',
    title: 'Foot Reflexology 45 Min',
    category: 'Therapeutic Massage',
    price: '$95',
    duration: '45 min',
    excerpt: 'A longer reflexology experience that maximizes detoxification and balance.',
    description:
      'Enjoy extended reflexology that continues to stimulate nerves, eliminate toxins, and bring the whole body back into balance.'
  },
  {
    slug: 'hot-stone-massage-50',
    title: 'Hot Stone Massage 50 Min',
    category: 'Therapeutic Massage',
    price: '$160',
    duration: '50 min',
    excerpt: 'Smooth, heated stones melt away muscle stiffness and tension for next-level relaxation.',
    description:
      'Indulge in a luxurious massage where heated stones glide along the body to ease stiffness, melt stress, and transport you to tranquility.'
  },
  {
    slug: 'hot-stone-massage-80',
    title: 'Hot Stone Massage 80 Min',
    category: 'Therapeutic Massage',
    price: '$195',
    duration: '80 min',
    excerpt: 'More time to soak in the soothing heat and therapeutic benefits of hot stones.',
    description:
      'An extended hot stone journey that layers warmth and massage techniques to dissolve knots and tension.'
  },
  {
    slug: 'prenatal-massage-50',
    title: 'Prenatal Massage 50 Min',
    category: 'Therapeutic Massage',
    price: '$159',
    duration: '50 min',
    excerpt: 'Relieve pregnancy aches and deliver serenity for both mama and baby.',
    description:
      'Our prenatal massage eases pregnancy discomfort, supports relaxation, and pampers both mom and baby with targeted, nurturing touch.'
  },
  {
    slug: 'prenatal-massage-80',
    title: 'Prenatal Massage 80 Min',
    category: 'Therapeutic Massage',
    price: '$199',
    duration: '80 min',
    excerpt: 'Extended relief and tranquility for expecting mothers who deserve extra TLC.',
    description:
      'Enjoy additional time tailored to prenatal needs, easing tension, promoting circulation, and providing deep relaxation.'
  },
  {
    slug: 'restorative-deep-tissue-50',
    title: 'Restorative Deep Tissue Massage 50 Min',
    category: 'Therapeutic Massage',
    price: '$130',
    duration: '50 min',
    excerpt: 'Therapists dive deep to release knots and leave you feeling limber and revived.',
    description:
      'Expert therapists target stubborn tension, working deeply to rejuvenate muscles and leave you feeling ready for anything.'
  },
  {
    slug: 'restorative-deep-tissue-80',
    title: 'Restorative Deep Tissue Massage 80 Min',
    category: 'Therapeutic Massage',
    price: '$169',
    duration: '80 min',
    excerpt: 'Extended deep tissue session for total tension release and flexibility.',
    description:
      'Spend extra time dissolving knots and enhancing mobility with our deeply restorative massage.'
  },
  {
    slug: 'swedish-massage-50',
    title: 'Swedish Massage 50 Min',
    category: 'Therapeutic Massage',
    price: '$109',
    duration: '50 min',
    excerpt: 'Classic soothing strokes that dissolve stress and invite utter relaxation.',
    description:
      'A harmonious dance of calming strokes that melt daily stress and restore calm from head to toe.'
  },
  {
    slug: 'swedish-massage-80',
    title: 'Swedish Massage 80 Min',
    category: 'Therapeutic Massage',
    price: '$145',
    duration: '80 min',
    excerpt: 'More time to indulge in the definitive relaxation massage experience.',
    description:
      'An extended Swedish session that allows every muscle to unwind and every worry to drift away.'
  },
  {
    slug: 'thai-herbal-massage-50',
    title: 'Thai Herbal Massage 50 Min',
    category: 'Therapeutic Massage',
    price: '$166',
    duration: '50 min',
    excerpt: 'Aromatic herbal compresses and Thai techniques renew body and senses.',
    description:
      'Our Thai Herbal Massage blends aromatic compresses with rhythmic techniques to dissolve stress, rejuvenate senses, and restore harmony.'
  },
  {
    slug: 'athletes-massage-50',
    title: "The Athlete's Massage 50 Min",
    category: 'Therapeutic Massage',
    price: '$126',
    duration: '50 min',
    excerpt: 'Performance-driven massage that targets muscle groups, improves range, and speeds recovery.',
    description:
      'Designed for athletes, this massage targets key muscle groups, enhances flexibility, and boosts circulation so you can hit your next goal.'
  },
  {
    slug: 'athletes-massage-80',
    title: "The Athlete's Massage 80 Min",
    category: 'Therapeutic Massage',
    price: '$165',
    duration: '80 min',
    excerpt: 'Extended sports massage for ultimate conditioning and restorative benefits.',
    description:
      'An 80-minute version that provides maximum attention to muscle recovery, flexibility, and performance.'
  },
  {
    slug: '4d-face-lifting-massage-60',
    title: '4D FACE Lifting Massage 60 Min',
    category: 'Therapeutic Massage',
    price: '$195',
    duration: '60 min',
    excerpt: 'A holistic facial massage that lifts, tones, and revitalizes skin without invasive methods.',
    description:
      'Experience the ultimate rejuvenation with a non-invasive treatment that combines Eastern and modern techniques to lift and sculpt your complexion.'
  },
  {
    slug: 'face-lifting-gua-sha-massage-50',
    title: 'Face Lifting Gua Sha & Massage 50 Min',
    category: 'Therapeutic Massage',
    price: '$125',
    duration: '50 min',
    excerpt: 'Gua Sha meets massage to contour, boost circulation, and reveal natural radiance.',
    description:
      'This holistic treatment fuses ancient Gua Sha with modern massage to lift, sculpt, and enhance glow while encouraging lymphatic drainage.'
  },
  {
    slug: 'face-lymphatic-drainage-30',
    title: 'Face Lymphatic Drainage 30 Min',
    category: 'Therapeutic Massage',
    price: '$95',
    duration: '30 min',
    excerpt: 'Gentle lymphatic work to banish puffiness and refresh skin.',
    description:
      'A non-invasive therapy that reduces fluid retention, detoxifies, and reveals a refreshed, youthful complexion.'
  },

  // Upgrades
  {
    slug: 'bamboo-suite-upgrade',
    title: 'Bamboo Suite Upgrade',
    category: 'Upgrades',
    price: '$40',
    excerpt: 'Enjoy treatments in the serene Bamboo Suite; priced per guest.',
    description:
      'Transform your spa day into a haven of tranquility with the Bamboo Suite upgrade. Revel in a private, serene setting—perfect for solo escapes or shared moments. Price is per guest; couples should book individually.'
  },
  {
    slug: 'couples-wine-platter-upgrade',
    title: 'Couples Wine and Platter Upgrade',
    category: 'Upgrades',
    price: '$80',
    excerpt: 'Add wine, fruits, cheeses, and chocolates for two in the Oasis Lounge.',
    description:
      'Elevate your spa day with a delectable mixed platter and wine served in the co-ed Oasis Lounge. Simply let our Spa Concierge know when you’d like your upgrade.'
  },
  {
    slug: 'couples-wine-platter-bamboo-upgrade',
    title: 'Couples Wine, Platter & Bamboo Suite Upgrade',
    category: 'Upgrades',
    price: '$100',
    excerpt: 'Combine Bamboo Suite privacy with wine and gourmet platter for two.',
    description:
      'Relish your spa treatment in the Bamboo Suite and enjoy fruits, cheeses, chocolates, and wine in the Oasis Lounge. The epitome of spa luxury for two.'
  },
  {
    slug: 'wine-platter-upgrade',
    title: 'Wine and Platter Upgrade',
    category: 'Upgrades',
    price: '$40',
    excerpt: 'Indulge in wine and gourmet bites before or after your treatment.',
    description:
      'A per-guest upgrade that pairs spa bliss with fruits, cheeses, chocolates, and wine in the Oasis Lounge.'
  },
  {
    slug: 'wine-platter-bamboo-upgrade',
    title: 'Wine, Platter, & Bamboo Suite Room Upgrade',
    category: 'Upgrades',
    price: '$50',
    excerpt: 'Pair Bamboo Suite serenity with gourmet bites and wine for one.',
    description:
      'Slip into the Bamboo Suite for your service, then indulge in wine, fruits, cheeses, and chocolates. Cost is per guest.'
  },

  // Advanced Aesthetic
  {
    slug: 'b12-shot',
    title: 'B12 Shot',
    category: 'Advanced Aesthetic',
    price: '$55',
    excerpt: 'A quick energy orchestra for the body via vitamin B12 injection.',
    description:
      'Consider vitamin B12 your energy orchestra conductor. When levels dip, fatigue steals the show. This injection resets the rhythm so vitality takes center stage.'
  },
  {
    slug: 'botox',
    title: 'Botox',
    category: 'Advanced Aesthetic',
    price: '$15',
    excerpt: 'Tailored Botox smoothing for forehead lines, crow’s feet, and frown lines with natural-looking results.',
    description:
      'Our BOTOX Cosmetic treatments do more than smooth wrinkles—they enhance symmetry, promote a rested appearance, and leave you looking naturally refreshed.'
  },
  {
    slug: 'collagen-induction-therapy-vitamin-c',
    title: 'Collagen Induction Therapy with Vitamin C',
    category: 'Advanced Aesthetic',
    price: '$350',
    excerpt: 'Microneedling meets vitamin C for a radiant, collagen-boosted complexion.',
    description:
      'Dive into rejuvenation with collagen induction plus a vitamin C twist. Boost collagen, brighten tone, and leave with a silky-smooth complexion.'
  },
  {
    slug: 'glutathione-skin-brightening',
    title: 'Glutathione Skin Brightening',
    category: 'Advanced Aesthetic',
    price: '$79',
    excerpt: 'An internal glow-up using glutathione to illuminate skin from within.',
    description:
      'Our glutathione push works from the inside out to deliver lit-from-within radiance, banish dullness, and keep complexions refreshed.'
  },
  {
    slug: 'hair-restoration-prp',
    title: 'Hair Restoration',
    category: 'Advanced Aesthetic',
    price: 'Starting at $499',
    excerpt: 'PRP therapy stimulates follicles and restores fullness without surgery.',
    description:
      'Unlock the power of Platelet-Rich Plasma (PRP) to revive thinning hair. Concentrated growth factors encourage new growth and support scalp health.'
  },
  {
    slug: 'hyaluronidase-dissolve',
    title: 'Hyaluronidase Dissolve',
    category: 'Advanced Aesthetic',
    price: '$175',
    excerpt: 'Reset hyaluronic acid fillers and return to a natural look.',
    description:
      'Not loving your fillers? Hyaluronidase is the reset button that gently dissolves unwanted hyaluronic acid so you can reclaim your natural vibe.'
  },
  {
    slug: 'iv-therapy-cosmetic',
    title: 'IV Therapy - Cosmetic',
    category: 'Advanced Aesthetic',
    price: '$230',
    excerpt: 'A custom IV infusion of vitamins, minerals, and antioxidants for glow and energy.',
    description:
      'Our cosmetic IV therapy delivers a customized blend directly into your bloodstream for skin radiance, elevated energy, and full-body wellbeing.'
  },
  {
    slug: 'iv-therapy-hydration',
    title: 'IV Therapy - Hydration',
    category: 'Advanced Aesthetic',
    price: '$175',
    excerpt: 'Replenish hydration fast with an IV that revives from the inside out.',
    description:
      'Dive into replenishment with an IV infusion that quickly restores hydration so you feel refreshed and revitalized.'
  },
  {
    slug: 'iv-therapy-recovery',
    title: 'IV Therapy - Recovery',
    category: 'Advanced Aesthetic',
    price: '$225',
    excerpt: 'A restorative IV blend that speeds up bounce-back time after exertion or long days.',
    description:
      'Recovery therapy delivers rejuvenating elements to help you bounce back faster—perfect after intense workouts, big events, or busy weeks.'
  },
  {
    slug: 'juvederm-ultra-xc',
    title: 'Juvederm Ultra XC',
    category: 'Advanced Aesthetic',
    price: '$650',
    excerpt: 'Lip augmentation and wrinkle correction with long-lasting hyaluronic gel.',
    description:
      'JUVÉDERM Ultra XC plumps lips and smooths moderate to severe facial wrinkles like nasolabial folds for a youthful finish.'
  },
  {
    slug: 'juvederm-volbella',
    title: 'Juvederm Volbella',
    category: 'Advanced Aesthetic',
    price: '$750',
    excerpt: 'Refined hyaluronic filler that softens perioral lines and enhances lips.',
    description:
      'VOLBELLA XC defines lips and smooths perioral lines with a silky gel ideal for subtle enhancement.'
  },
  {
    slug: 'juvederm-voluma',
    title: 'Juvederm Voluma',
    category: 'Advanced Aesthetic',
    price: '$1000',
    excerpt: 'Deep cheek and chin volumizer that restores youthful contours.',
    description:
      'VOLUMA XC adds structure to cheeks and chin, correcting age-related volume loss for sculpted definition.'
  },
  {
    slug: 'juvederm-volux',
    title: 'Juvederm Volux',
    category: 'Advanced Aesthetic',
    price: '$850',
    excerpt: 'Next-generation filler engineered to sculpt the lower face with bone-like structure.',
    description:
      'Volux features an advanced hyaluronic matrix that delivers the longest-lasting filler result yet, ideal for jawline and lower-face sculpting.'
  },
  {
    slug: 'lipo-sculpt',
    title: 'Lipo Sculpt',
    category: 'Advanced Aesthetic',
    price: 'Starting at $300',
    excerpt: 'Target stubborn pockets and refine your silhouette with precision contouring.',
    description:
      'Lipo Sculpt is the VIP pass to reshaping stubborn areas, celebrating your body transformation with tailored contouring solutions.'
  },
  {
    slug: 'meso-brightening',
    title: 'Meso Brightening',
    category: 'Advanced Aesthetic',
    price: 'Starting at $125',
    excerpt: 'Microneedling plus targeted serums erase dark spots and uneven tone.',
    description:
      'Meso Brightening teams microneedling with potent serums to fight discoloration, freckles, and age spots for a radiant glow.'
  },
  {
    slug: 'meso-contour',
    title: 'Meso Contour',
    category: 'Advanced Aesthetic',
    price: 'Starting at $125',
    excerpt: 'Sculpt and define post-weight-loss curves with mesotherapy support.',
    description:
      'Celebrate fitness milestones with Meso Contour—a mesotherapy treatment that refines features and reveals a sculpted, confident you.'
  },
  {
    slug: 'meso-firm',
    title: 'Meso Firm',
    category: 'Advanced Aesthetic',
    price: 'Starting at $125',
    excerpt: 'A results-driven mesotherapy boost that firms and rejuvenates skin.',
    description:
      'Meso Firm is no-frills, all-results—delivering firmer, more youthful skin through targeted mesotherapy.'
  },
  {
    slug: 'meso-glow',
    title: 'Meso Glow',
    category: 'Advanced Aesthetic',
    price: 'Starting at $125',
    excerpt: 'Luxurious mesotherapy with micro-needling and nourishing serums for serious radiance.',
    description:
      'Elevate your skincare ritual with Meso Glow. Micro-needling joins forces with nourishing serums to pamper skin and unlock unstoppable luminosity.'
  },
  {
    slug: 'meso-lift',
    title: 'Meso Lift',
    category: 'Advanced Aesthetic',
    price: 'Starting at $125',
    excerpt: 'Face-focused mesotherapy that smooths, tones, and boosts elasticity.',
    description:
      'Meso Lift combines micro-needling and targeted serums to spark collagen production, improve elasticity, and redefine facial contours.'
  },
  {
    slug: 'prp-facial',
    title: 'PRP Facial',
    category: 'Advanced Aesthetic',
    price: '$550',
    excerpt: 'Platelet-rich plasma revitalizes skin, smoothing fine lines and unveiling youthful radiance.',
    description:
      'Unleash the power of your own platelet-rich plasma to smooth fine lines, boost collagen, and reveal a youthful glow that turns heads.'
  },
  {
    slug: 'vampire-facial',
    title: 'The Vampire Facial',
    category: 'Advanced Aesthetic',
    price: 'Starting at $999',
    excerpt: 'A bespoke non-surgical facelift that tightens, lifts, and sculpts before big moments.',
    description:
      'Elevate your glow with a personalized non-surgical facelift. Packages tighten, lift, and sculpt without going under the knife—ideal for weddings, reunions, or anyone craving a dramatic refresh.'
  },

  // Body Treatments
  {
    slug: 'back-facial-50',
    title: 'Back Facial 50 Min',
    category: 'Body Treatments',
    price: '$179',
    duration: '50 min',
    excerpt: 'Deep cleanse and sulfur treatment keep your back smooth, clear, and glowing.',
    description:
      'Our deep cleansing back facial kicks blemishes offstage and unveils a radiant glow, with a sulfur mask and peel to tackle stubborn spots.'
  },
  {
    slug: 'back-microdermabrasion-50',
    title: 'Back Microdermabrasion 50 Min',
    category: 'Body Treatments',
    price: '$115',
    duration: '50 min',
    excerpt: 'Crystal resurfacing keeps your back silky and spotlight-ready.',
    description:
      'Fine crystals sweep away surface imperfections on the back, leaving skin smooth, bright, and diva-level gorgeous.'
  },
  {
    slug: 'back-stimulator-peel-30',
    title: 'Back Stimulator Peel 30 Min',
    category: 'Body Treatments',
    price: '$149',
    duration: '30 min',
    excerpt: 'A no-downtime peel that evens tone and refreshes sun-stressed skin.',
    description:
      'Enjoy the benefits of exfoliation without downtime. This peel targets sun damage, age spots, and encourages healthy cell turnover.'
  },
  {
    slug: 'jet-plasma-face-neck-50',
    title: 'Jet Plasma Face and Neck Treatment 50 Min',
    category: 'Body Treatments',
    price: '$450',
    duration: '50 min',
    excerpt: 'Plasma technology tightens and brightens face and neck with zero downtime.',
    description:
      'Jet Plasma targets fine lines, sagging, and dullness on the face and neck without downtime—safe for all skin types.'
  },
  {
    slug: 'jet-plasma-neck-20',
    title: 'Jet Plasma Neck Only 20 Min',
    category: 'Body Treatments',
    price: '$250',
    duration: '20 min',
    excerpt: 'Quick jet plasma boost to smooth and firm the neck zone.',
    description:
      'Focused jet plasma session tailored to the neck, addressing laxity and texture concerns with ease.'
  },
  {
    slug: 'jet-plasma-decollete-30',
    title: 'Jet Plasma Décolleté 30 Min',
    category: 'Body Treatments',
    price: '$109',
    duration: '30 min',
    excerpt: 'Targets sun damage and aging across the chest for a youthful finish.',
    description:
      'Revitalize the décolleté with jet plasma that tackles sun spots, aging, and wrinkles—no downtime required.'
  },
  {
    slug: 'jet-plasma-scalp-30',
    title: 'Jet Plasma Scalp 30 Min',
    category: 'Body Treatments',
    price: '$300',
    duration: '30 min',
    excerpt: 'Support scalp health and address hair concerns with jet plasma technology.',
    description:
      'Jet Plasma for the scalp assists with hair loss, oily or dry scalp, and dandruff while boosting overall scalp vitality.'
  },
  {
    slug: 'jet-plasma-hand-20',
    title: 'Jet Plasma Hand 20 Min',
    category: 'Body Treatments',
    price: '$250',
    duration: '20 min',
    excerpt: 'Rejuvenate hands by softening sun damage and smoothing texture.',
    description:
      'A fast jet plasma treatment that refreshes hands, targeting sun spots, aging, and dullness.'
  },
  {
    slug: 'jet-plasma-arm-30',
    title: 'Jet Plasma Arm 30 Min',
    category: 'Body Treatments',
    price: '$295',
    duration: '30 min',
    excerpt: 'Addresses crepey skin and laxity along the arms with zero downtime.',
    description:
      'Jet plasma energizes the arms, improving elasticity, texture, and overall tone.'
  },
  {
    slug: 'jet-plasma-breast-40',
    title: 'Jet Plasma Breast 40 Min',
    category: 'Body Treatments',
    price: '$400',
    duration: '40 min',
    excerpt: 'Lift and smooth breast skin by targeting fine lines and laxity.',
    description:
      'Safe, no-downtime jet plasma refines the breast area, addressing sagging and dullness for refreshed contours.'
  },
  {
    slug: 'jet-plasma-stomach-30',
    title: 'Jet Plasma Stomach 30 Min',
    category: 'Body Treatments',
    price: '$350',
    duration: '30 min',
    excerpt: 'Refresh the stomach area by softening stretch marks, scarring, and texture.',
    description:
      'Jet plasma addresses stretch marks, scars, texture, and cellulite appearance on the stomach without downtime.'
  },
  {
    slug: 'jet-plasma-legs-knee-50',
    title: 'Jet Plasma Legs and Knee 50 Min',
    category: 'Body Treatments',
    price: '$500',
    duration: '50 min',
    excerpt: 'Combat crepey skin and laxity on legs and knees with restorative jet plasma.',
    description:
      'Perfect for laxity caused by age or weight changes, this jet plasma session revives legs and knees with smoother tone and texture.'
  },

  // Brow & Lash
  {
    slug: 'eyebrow-tint-20',
    title: 'Eyebrow Tint 20 Min',
    category: 'Brow & Lash',
    price: '$40',
    duration: '20 min',
    excerpt: 'Customized brow tinting that frames eyes with vivid or subtle definition.',
    description:
      'Revolutionize your gaze with tailored brow tinting. Whether bold or natural, our experts craft brows that wow.'
  },
  {
    slug: 'eyebrow-tweezing-15',
    title: 'Eyebrow Tweezing 15 Min',
    category: 'Brow & Lash',
    price: '$25',
    duration: '15 min',
    excerpt: 'Precise tweezing shapes brows to enhance your natural line.',
    description:
      'Meticulous tweezing removes strays and sculpts brows for a polished, face-framing finish.'
  },
  {
    slug: 'eyelash-tint-20',
    title: 'Eyelash Tint 20 Min',
    category: 'Brow & Lash',
    price: '$40',
    duration: '20 min',
    excerpt: 'Custom lash tint delivers bold, mascara-free definition.',
    description:
      'Trade mascara drama for effortless lashes. A personalized tint enhances natural lashes for show-stopping eyes.'
  },
  {
    slug: 'eyebrow-tweezing-tint-30',
    title: 'Eyebrow Tweezing and Tint 30 Min',
    category: 'Brow & Lash',
    price: '$75',
    duration: '30 min',
    excerpt: 'Combine precise tweezing with custom tint for brows that steal the show.',
    description:
      'Our dynamic duo shapes brows to perfection then adds depth with bespoke tint for bold, beautiful arches.'
  },
  {
    slug: 'lash-lift-60',
    title: 'Lash Lift 60 Min',
    category: 'Brow & Lash',
    price: '$110',
    duration: '60 min',
    excerpt: 'Lift and curl natural lashes for effortless glam without extensions.',
    description:
      'This lash lift elevates, curls, and defines your natural lashes so eyes look wide, bright, and ready to conquer the day.'
  },

  // Waxing Hair Removal Service
  {
    slug: 'wax-abdomen-center-strip',
    title: 'Abdomen Center Strip 15 Min',
    category: 'Waxing Hair Removal Service',
    price: '$17.25',
    duration: '15 min',
    excerpt: 'Smooth the center strip with expert waxing in minutes.',
    description:
      'A focused wax that keeps the abdomen center sleek, smooth, and swim-ready.'
  },
  {
    slug: 'wax-arms',
    title: 'Arms 30 Min',
    category: 'Waxing Hair Removal Service',
    price: '$60',
    duration: '30 min',
    excerpt: 'Full arm waxing for silky, hair-free confidence.',
    description:
      'Comprehensive arm waxing that leaves skin soft, smooth, and ready to shine.'
  },
  {
    slug: 'wax-back',
    title: 'Back 60 Min',
    category: 'Waxing Hair Removal Service',
    price: '$95',
    duration: '60 min',
    excerpt: 'Thorough back wax that keeps skin clear of unwanted hair.',
    description:
      'A detailed waxing service that removes hair across the back for long-lasting smoothness.'
  },
  {
    slug: 'wax-bikini',
    title: 'Bikini 30 Min',
    category: 'Waxing Hair Removal Service',
    price: '$60',
    duration: '30 min',
    excerpt: 'Classic bikini wax to keep swimsuit lines neat and tidy.',
    description:
      'Maintain clean lines and beach-ready confidence with our precise bikini wax.'
  },
  {
    slug: 'wax-brow',
    title: 'Brow 15 Min',
    category: 'Waxing Hair Removal Service',
    price: '$18',
    duration: '15 min',
    excerpt: 'Shape and define brows with swift waxing precision.',
    description:
      'Expert brow waxing refines arches for a polished, face-framing finish.'
  },
  {
    slug: 'wax-chest',
    title: 'Chest 30 Min',
    category: 'Waxing Hair Removal Service',
    price: '$55',
    duration: '30 min',
    excerpt: 'Smooth the chest with a clean, confident wax.',
    description:
      'Remove unwanted chest hair for a sleek, refreshed feel.'
  },
  {
    slug: 'wax-face',
    title: 'Face 45 Min',
    category: 'Waxing Hair Removal Service',
    price: '$55',
    duration: '45 min',
    excerpt: 'Comprehensive facial waxing for a soft, makeup-ready canvas.',
    description:
      'A full-face wax that keeps skin smooth and fuzz-free from forehead to chin.'
  },
  {
    slug: 'wax-full-leg',
    title: 'Full Leg 50 Min',
    category: 'Waxing Hair Removal Service',
    price: '$95',
    duration: '50 min',
    excerpt: 'Head-to-toe leg waxing for silky, hair-free results.',
    description:
      'A thorough leg wax that leaves skin smooth, touchable, and ready for any outfit.'
  },
  {
    slug: 'wax-half-leg',
    title: 'Half Leg 30 Min',
    category: 'Waxing Hair Removal Service',
    price: '$65',
    duration: '30 min',
    excerpt: 'Focus on upper or lower legs with swift, smooth waxing.',
    description:
      'Choose upper or lower legs for a targeted wax that keeps skin sleek.'
  },
  {
    slug: 'wax-lip-chin',
    title: 'Lip/ Chin 15 Min',
    category: 'Waxing Hair Removal Service',
    price: '$20',
    duration: '15 min',
    excerpt: 'Quick lip and chin waxing for a flawless finish.',
    description:
      'Swiftly remove lip and chin hair for a polished, makeup-ready complexion.'
  },
  {
    slug: 'wax-sideburns',
    title: 'Side Burns 15 Min',
    category: 'Waxing Hair Removal Service',
    price: '$25',
    duration: '15 min',
    excerpt: 'Define sideburns with precise waxing that keeps lines clean.',
    description:
      'A tidy sideburn wax that frames the face and keeps hair perfectly in place.'
  },
  {
    slug: 'wax-nostrils',
    title: 'Nostrils 15 Min',
    category: 'Waxing Hair Removal Service',
    price: '$20',
    duration: '15 min',
    excerpt: 'Groom nostril hair quickly and comfortably.',
    description:
      'A gentle wax that safely removes visible nostril hair for a polished look.'
  },
  {
    slug: 'wax-underarms',
    title: 'Underarms 30 Min',
    category: 'Waxing Hair Removal Service',
    price: '$35',
    duration: '30 min',
    excerpt: 'Keep underarms smooth and confident with expert waxing.',
    description:
      'A thorough underarm wax that removes hair from root to tip for long-lasting smoothness.'
  },
  {
    slug: 'wax-unibrow',
    title: 'Unibrow 15 Min',
    category: 'Waxing Hair Removal Service',
    price: '$12',
    duration: '15 min',
    excerpt: 'Separate and define brow arches in minutes.',
    description:
      'A quick wax that keeps the brow bridge clean for beautifully distinct arches.'
  }
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const servicesByDisplaySection = () => {
  const sections: { key: string; label: string; filter: (service: ServiceItem) => boolean }[] = [
    { key: 'new', label: 'New Services', filter: (service) => service.isNew === true },
    {
      key: 'most-requested',
      label: 'Most-Requested Treatments',
      filter: (service) => service.isMostRequested === true
    },
    {
      key: 'facial-treatments',
      label: 'Facial Treatments',
      filter: (service) => service.category === 'Facial Treatments'
    },
    {
      key: 'therapeutic-massage',
      label: 'Therapeutic Massage',
      filter: (service) => service.category === 'Therapeutic Massage'
    },
    { key: 'upgrades', label: 'Upgrades', filter: (service) => service.category === 'Upgrades' },
    {
      key: 'advanced-aesthetic',
      label: 'Advanced Aesthetic',
      filter: (service) => service.category === 'Advanced Aesthetic'
    },
    {
      key: 'body-treatments',
      label: 'Body Treatments',
      filter: (service) => service.category === 'Body Treatments'
    },
    { key: 'brow-lash', label: 'Brow & Lash', filter: (service) => service.category === 'Brow & Lash' },
    {
      key: 'waxing',
      label: 'Waxing Hair Removal Service',
      filter: (service) => service.category === 'Waxing Hair Removal Service'
    }
  ];

  return sections
    .map((section) => ({
      key: section.key,
      label: section.label,
      items: services.filter(section.filter)
    }))
    .filter((section) => section.items.length > 0);
};

export const featuredServices = services.filter((service) => service.featured);
