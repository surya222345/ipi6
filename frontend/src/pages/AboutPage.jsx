import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  const activities = [
    { icon: '📚', title: 'கல்வி', desc: 'மாணவர்களின் கல்வி வளர்ச்சிக்கு உறுதுணையாக இருத்தல்' },
    { icon: '🌱', title: 'சுற்றுச்சூழல் பாதுகாப்பு', desc: 'இயற்கையையும் நமது சுற்றுப்புறத்தையும் பாதுகாத்தல்' },
    { icon: '🩸', title: 'இரத்ததானம்', desc: 'உயிர் காக்கும் இரத்ததான முகாம்களை நடத்துதல்' },
    { icon: '🌳', title: 'மரக்கன்று நடுதல்', desc: 'பசுமை பாரதத்தை உருவாக்க மரக்கன்றுகள் நடுதல்' },
    { icon: '🏥', title: 'சுகாதார விழிப்புணர்வு', desc: 'மக்களிடையே ஆரோக்கியமான சுகாதார பழக்கங்களை பரப்புதல்' },
    { icon: '🤝', title: 'பேரிடர் கால நிவாரணம்', desc: 'அவசர காலங்களில் மக்களுக்கு உடனடி உதவி வழங்குதல்' },
    { icon: '🎁', title: 'எளியோருக்கு உதவி', desc: 'வறுமையில் உள்ள ஏழை எளிய மக்களுக்கு ஆதரவளித்தல்' },
    { icon: '🛡️', title: 'பெண்கள் & குழந்தைகள் பாதுகாப்பு', desc: 'அவர்களின் உரிமைகளையும் பாதுகாப்பையும் உறுதி செய்தல்' },
    { icon: '👵', title: 'முதியோர் நலன்', desc: 'முதியோரின் உடல்நலன் மற்றும் மனநலனில் அக்கறை கொள்ளுதல்' },
    { icon: '🚀', title: 'இளையும் திறன் மேம்பாடு', desc: 'இளைஞர்களின் தனித்திறமைகளை கண்டறிந்து வளர்த்தல்' }
  ];

  const values = [
    { title: 'நேர்மை', desc: 'அனைத்து செயல்பாடுகளிலும் நேர்மை' },
    { title: 'ஒழுக்கம்', desc: 'இயக்கத்தின் ஒழுங்குமுறை மற்றும் கட்டுப்பாடு' },
    { title: 'பொறுப்புணர்வு', desc: 'சமூகத்தின் மீதான முழு பொறுப்பு' },
    { title: 'வெளிப்படைத்தன்மை', desc: 'வெளிப்படையான மக்கள் சேவை' },
    { title: 'ஒற்றுமை', desc: 'அனைவருடன் இணைந்த கூட்டு முயற்சி' },
    { title: 'மனிதநேயம்', desc: 'சாதி, மத வேறுபாடற்ற மனிதநேயம்' }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title tamil-title">இளைஞர்கள் பொதுநல இயக்கம்</h1>
        <p className="about-subtitle">கொள்கை & லட்சியம்</p>
      </div>

      <div className="about-content">
        <section className="about-section intro-card">
          <h2>எங்களைப் பற்றி</h2>
          <p className="intro-text">
            இளைஞர்கள் பொதுநல இயக்கம் என்பது மக்களின் நலன், சமூக ஒற்றுமை மற்றும் மனிதநேயத்தை அடிப்படையாகக் கொண்டு செயல்படும் ஒரு சேவை இயக்கமாகும். எங்கள் இயக்கத்தின் முதன்மை நோக்கம், இளைஞர்களின் திறமைகளை சமூக முன்னேற்றத்திற்காக பயன்படுத்துவதாகும். சாதி, மதம், மொழி, இனம், பாலினம், பொருளாதார நிலை போன்ற எந்த வேறுபாடும் இன்றி அனைவரையும் சமமாக மதித்து செயல்படுவோம்.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">முதன்மைப் பணிகள்</h2>
          <div className="activities-grid">
            {activities.map((act, index) => (
              <div key={index} className="activity-card">
                <div className="activity-icon">{act.icon}</div>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section values-section">
          <h2 className="section-title">அடிப்படை மதிப்புகள்</h2>
          <div className="values-grid">
            {values.map((val, index) => (
              <div key={index} className="value-card">
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section outro-card">
          <p className="outro-text">
            மக்கள் நம்பிக்கையை பாதுகாத்து, தன்னலமற்ற சேவையின் மூலம் நல்ல சமுதாயத்தை உருவாக்குவதே எங்கள் உயர்ந்த இலட்சியமாகும்.
          </p>
        </section>
      </div>
    </div>
  );
}
