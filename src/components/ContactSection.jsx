import React, { useState } from 'react';
import { Mail, Send, Phone, MessageSquare, CheckCircle, Sparkles, Instagram } from 'lucide-react';

export default function ContactSection({ lang, preselectedPkg }) {
  const [formData, setFormData] = useState({
    brand: '',
    contactName: '',
    email: '',
    type: preselectedPkg ? preselectedPkg.title : 'Reel Patrocinado',
    budget: '$300 - $600 USD',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ brand: '', contactName: '', email: '', type: 'Reel Patrocinado', budget: '$300 - $600 USD', message: '' });
    }, 4000);
  };

  const content = {
    es: {
      tag: 'INICIAR COLABORACIÓN COMERCIAL',
      title: 'Trabajemos Juntos en Tu Próxima Campaña',
      subtitle: 'Envía tu propuesta directa para recibir un Media Kit ampliado, disponibilidad de fechas y cotización formal.',
      formBrand: 'Nombre de la Marca / Agencia',
      formName: 'Nombre de Contacto',
      formEmail: 'Correo Electrónico Corporativo',
      formType: 'Tipo de Colaboración',
      formBudget: 'Presupuesto Estimado',
      formMessage: 'Detalles de la Campaña o Producto',
      submitBtn: 'Enviar Propuesta Comercial',
      directChat: 'Contacto Rápido por WhatsApp',
      successMsg: '¡Mensaje recibido con éxito! El equipo de Ginger Boy responderá en menos de 24 horas.'
    },
    en: {
      tag: 'START COMMERCIAL COLLABORATION',
      title: 'Let\'s Partner on Your Next Campaign',
      subtitle: 'Send your campaign direct pitch for calendar availability and formal proposal.',
      formBrand: 'Brand / Agency Name',
      formName: 'Contact Person Name',
      formEmail: 'Corporate Email',
      formType: 'Collaboration Type',
      formBudget: 'Estimated Budget',
      formMessage: 'Campaign / Product Details',
      submitBtn: 'Send Commercial Pitch',
      directChat: 'Quick WhatsApp Direct',
      successMsg: 'Proposal received! Ginger Boy\'s team will respond within 24 hours.'
    }
  }[lang];

  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'rgba(11, 14, 20, 0.9)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} style={{ display: 'inline', marginRight: '0.4rem' }} />
            {content.tag}
          </div>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'start', gap: '3rem' }}>
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="glass-card" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '1rem' }}>
                Conexión Directa para Marcas
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                Buscamos colaboraciones orgánicas y de alto valor donde los productos y servicios se integren de forma natural con la audiencia de Ginger Boy.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'rgba(255,94,54,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--ginger-primary)'
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Comercial</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFF' }}>contacto@gingerboy.com</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10B981'
                  }}>
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>WhatsApp Business</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFF' }}>+58 412 000 0000</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'rgba(229, 178, 93, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-accent)'
                  }}>
                    <Instagram size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Instagram Oficial</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFF' }}>@gingerboy</div>
                  </div>
                </div>

              </div>
            </div>

            {/* WhatsApp Quick Direct Link */}
            <a 
              href="https://wa.me/?text=Hola%20Ginger%20Boy,%20quisiera%20consultar%20disponibilidad%20para%20una%20colaboración" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                width: '100%',
                justify: 'center',
                background: 'rgba(16, 185, 129, 0.15)',
                borderColor: 'rgba(16, 185, 129, 0.4)',
                color: '#10B981'
              }}
            >
              <MessageSquare size={18} />
              <span>{content.directChat}</span>
            </a>
          </div>

          {/* Right Column: Commercial Inquiry Form */}
          <div className="glass-card" style={{ padding: '2.5rem', borderColor: 'var(--border-ginger)' }}>
            
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <CheckCircle size={60} color="#10B981" />
                <h3 style={{ fontSize: '1.6rem', color: '#FFF' }}>¡Propuesta Enviada!</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>
                  {content.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>{content.formBrand}</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ej: Nike, Booking, Samsung"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>{content.formName}</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Tu nombre completo"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>{content.formEmail}</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="ejemplo@marca.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>{content.formType}</label>
                    <select 
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      style={inputStyle}
                    >
                      <option value="Reel Patrocinado">Reel Patrocinado HD</option>
                      <option value="Pack Historias">Pack de Historias (3x)</option>
                      <option value="Embajaduría">Embajaduría Mensual</option>
                      <option value="Evento / Cobertura">Cobertura de Evento</option>
                      <option value="Otro">Personalizado</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>{content.formBudget}</label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={inputStyle}
                    >
                      <option value="$200 - $400 USD">$200 - $400 USD</option>
                      <option value="$400 - $800 USD">$400 - $800 USD</option>
                      <option value="$800 - $1,500 USD">$800 - $1,500 USD</option>
                      <option value="+$1,500 USD">+$1,500 USD (Campaña Mayor)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>{content.formMessage}</label>
                  <textarea 
                    rows="4"
                    required
                    placeholder="Cuéntanos brevemente sobre la campaña, objetivo, fechas estimadas y producto a promocionar..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <Send size={16} />
                  <span>{content.submitBtn}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: '600',
  color: 'var(--text-muted)',
  marginBottom: '0.4rem'
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  background: 'var(--bg-input)',
  border: '1px solid var(--border-light)',
  borderRadius: 'var(--radius-md)',
  color: '#FFF',
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: 'inherit'
};
