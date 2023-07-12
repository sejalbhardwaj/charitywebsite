import React from 'react'

const Donate = () => {
  return (
    <>
    <section className='Donation-container'>
    <h1 >Donate Here</h1>
        <div className="donate-main-container">
          <p className='entry-text'>
            Thank you for considering a donation to Matoshri Ahilyabai Holkar Charitable Trust.Together, we can make a difference in the
            lives of those in need.
          </p>
         
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="bank-details">
              <span>
                <h3>Direct Bank Transfer </h3>
                <div className="pay-details">
                <br/>
                <p>
                  If you prefer to donate via bank transfer, please use the
                  following details: <br/> <br/>
                  <ul>
                    <li>Bank Name: [BankName]</li>
                    <li>Account Name: [Charity Trust Name]</li>
                    <li>Account Number:[Account Number] </li>
                    <li>
                      Swift Code (for international transfers): [Swift Code]
                    </li>
                    <li>
                      Reference: [Specify any reference or instructions for the
                      transfer]
                    </li>
                  </ul>
                </p>
                </div>
              </span>
              </div>
             
            </div>
            <div className="col-12 col-lg-6">
            <span>
            <div className="pay-img">
                <h3>QR code</h3>
                <img src="./photos/QrCode.jpeg" alt="Qrcode" />
              </div>
              </span>
              </div>
              <p>
                Thank You. We are grateful for your generosity and support.
                
              </p>
          </div>
        </div>
      </section>
      </>
  )
}

export default Donate
