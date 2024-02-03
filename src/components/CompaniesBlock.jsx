import CompaniesContainer from '../styles/CompaniesContainer';
import CompaniesImages from '../styles/CompaniesImage';
import mrv from '../assets/images/mrv.svg';
import idb from '../assets/images/idb.svg';
import comgas from '../assets/images/comgas.svg';
import bayer from '../assets/images/bayer.svg';
import cvc from '../assets/images/cvc.svg';
import centauro from '../assets/images/centauro.svg';
import neoenergia from '../assets/images/neoenergia.svg';
import google from '../assets/images/google.svg';
import honda from '../assets/images/honda.svg';
import ambev from '../assets/images/ambev.svg';
import hsl from '../assets/images/hsl.svg';

function CompaniesBlock() {
  return (
    <CompaniesContainer>
      <CompaniesImages src={mrv} />
      <CompaniesImages src={google} />
      <CompaniesImages src={idb} />
      <CompaniesImages src={comgas} />
      <CompaniesImages src={bayer} />
      <CompaniesImages src={cvc} />
      <CompaniesImages src={centauro} />
      <CompaniesImages src={neoenergia} />
      <CompaniesImages src={google} />
      <CompaniesImages src={honda} />
      <CompaniesImages src={ambev} />
      <CompaniesImages src={hsl} />
    </CompaniesContainer>
  );
}

export default CompaniesBlock;
