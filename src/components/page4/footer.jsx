
'use client';

import { Footer } from 'flowbite-react';
import { BsYoutube, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Foot() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-3/4 mx-[140px] justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="h-20 w-20">
            <Footer.Brand
              href="#"
              src="https://www.digilocker.gov.in/assets/img/digilocker-w.png"
            />
            <div className="flex justify-center space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsYoutube} />
          </div>
          </div>
          <div className="grid font-bold text-2xl mx-[-60px] grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Need Help</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">Credits</Footer.Link>
                <Footer.Link href="#">Tender</Footer.Link>
                <Footer.Link href="#">FAQ's</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
                <Footer.Link href="#">Youtube</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="text-sm sm:flex sm:items-center sm:justify-between">
          <h1>©️ 2023, Website maintained by @TEAM Hash It Out" </h1>
        </div>
      </div>
    </Footer>
  );
}
export default Foot;
