import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <Image src="/images/logo-white.svg" alt="CUSpire Logo" height={80} width={240} className="mb-3" />
            <p>© 2025 CUSpire</p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-sm-4 mb-4">
                <h4 className="h5 mb-3">Company</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link href="/about" className="text-white-50">About</Link></li>
                  <li className="mb-2"><Link href="/contact" className="text-white-50">Contact</Link></li>
                  <li className="mb-2"><Link href="/privacy" className="text-white-50">Privacy Policy</Link></li>
                  <li className="mb-2"><Link href="/terms" className="text-white-50">Terms of Use</Link></li>
                </ul>
              </div>
              <div className="col-sm-4 mb-4">
                <h4 className="h5 mb-3">Solutions</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><Link href="/solutions/poweron" className="text-white-50">PowerOn</Link></li>
                  <li className="mb-2"><Link href="/solutions/banno" className="text-white-50">Banno</Link></li>
                  <li className="mb-2"><Link href="/solutions/reporting" className="text-white-50">Reporting</Link></li>
                  <li className="mb-2"><Link href="/solutions/compliance" className="text-white-50">Compliance</Link></li>
                </ul>
              </div>
              <div className="col-sm-4 mb-4">
                <h4 className="h5 mb-3">Connect</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-white-50"><FontAwesomeIcon icon={faYoutube} className="me-2" />YouTube</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50"><FontAwesomeIcon icon={faGithub} className="me-2" />GitHub</a></li>
                  <li className="mb-2"><a href="#" className="text-white-50"><FontAwesomeIcon icon={faLinkedin} className="me-2" />LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-4">
          <p className="text-center mb-0">Email: <a href="mailto:support@cuspire.com" className="text-info">support@cuspire.com</a></p>
        </div>
      </div>
    </footer>
  );
}
