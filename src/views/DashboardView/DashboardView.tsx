import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './DashboardView.scss';
import { useCurrentCoordinates } from '@hooks/useCurrentCoordinates';
import Greetings from '@components/Greetings/Greetings';
import * as diacritics from 'diacritics';

const DashboardView = () => {
  const currentCoords = useCurrentCoordinates();
  const [selectedOption, setSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    console.log(currentCoords);
  }, [currentCoords]);

  const provinceList = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Hải Phòng",
    "Cần Thơ",
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái"
  ];

  useEffect(() => {
    const filtered = provinceList.filter((option) =>
      (diacritics.remove(option).toLowerCase()).startsWith((diacritics.remove(searchValue).toLowerCase()))
    );
    setFilteredOptions(filtered);
  }, [searchValue]);

  return (
    <MDBContainer id="content-container">
      <MDBRow id="content-row" className="flex-row-reverse">
        <MDBCol className="side-panel d-flex justify-content-center align-items-start" lg="3" md="4">
          <MDBContainer>
            <MDBRow className="justify-content-center my-3">
              <MDBInputGroup id="search-section">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleInputChange}
                  list="options-list"
                />
                <datalist id="options-list">
                  {filteredOptions.map((option) => (
                    <option key={diacritics.remove(option)} value={option} />
                  ))}
                </datalist>
                {/*<MDBInput label="Search" />
                  <MDBBtn rippleColor="dark">
                  <MDBIcon icon="search" />
                </MDBBtn> */}
              </MDBInputGroup>
            </MDBRow>
            <MDBRow className="justify-content-center my-3">
              <MDBCard className="info-card">
                <MDBCardBody>Current Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
            <MDBRow className="justify-content-start text-align-left my-3">
              <h6>Other locations</h6>
            </MDBRow>
            <MDBRow className="justify-content-center my-3">
              <MDBCard className="info-card">
                <MDBCardBody>Other Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
            <MDBRow className="justify-content-center my-3">
              <MDBCard className="info-card">
                <MDBCardBody>Other Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
            <MDBRow className="justify-content-center my-3">
              <MDBCard className="info-card">
                <MDBCardBody>Other Location Info</MDBCardBody>
              </MDBCard>
            </MDBRow>
          </MDBContainer>
        </MDBCol>
        <MDBCol className="detail-board" lg="9" md="8">
          <Greetings />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DashboardView;
