import { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup} from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './DashboardView.scss';
import { useCurrentCoordinates } from '@hooks/useCurrentCoordinates';
import Greetings from '@components/Greetings/Greetings';
import Select from 'react-select';

const DashboardView = () => {
  const currentCoords = useCurrentCoordinates();
  const [selectedProvince, setSelectedProvince] = useState('');

  const handleProvinceChange = (selectedOption: any) => {
    setSelectedProvince(selectedOption.value);
    console.log(selectedOption.value);
  };


  useEffect(() => {
    console.log(currentCoords);
  }, [currentCoords]);

  const provinceOptions = [
    { value: 'Ha Noi', label: 'Hà Nội' },
    { value: 'Ho Chi Minh', label: 'Hồ Chí Minh' },
    { value: 'Da Nang', label: 'Đà Nẵng' },
    { value: 'Hai Phong', label: 'Hải Phòng' },
    { value: 'Can Tho', label: 'Cần Thơ' },
    { value: 'An Giang', label: 'An Giang' },
    { value: 'Ba Ria - Vung Tau', label: 'Bà Rịa - Vũng Tàu' },
    { value: 'Bac Giang', label: 'Bắc Giang' },
    { value: 'Bac Kan', label: 'Bắc Kạn' },
    { value: 'Bac Lieu', label: 'Bạc Liêu' },
    { value: 'Bac Ninh', label: 'Bắc Ninh' },
    { value: 'Ben Tre', label: 'Bến Tre' },
    { value: 'Binh Dinh', label: 'Bình Định' },
    { value: 'Binh Duong', label: 'Bình Dương' },
    { value: 'Binh Phuoc', label: 'Bình Phước' },
    { value: 'Binh Thuan', label: 'Bình Thuận' },
    { value: 'Ca Mau', label: 'Cà Mau' },
    { value: 'Cao Bang', label: 'Cao Bằng' },
    { value: 'Dak Lak', label: 'Đắk Lắk' },
    { value: 'Dak Nong', label: 'Đắk Nông' },
    { value: 'Dien Bien', label: 'Điện Biên' },
    { value: 'Dong Nai', label: 'Đồng Nai' },
    { value: 'Dong Thap', label: 'Đồng Tháp' },
    { value: 'Gia Lai', label: 'Gia Lai' },
    { value: 'Ha Giang', label: 'Hà Giang' },
    { value: 'Ha Nam', label: 'Hà Nam' },
    { value: 'Ha Tinh', label: 'Hà Tĩnh' },
    { value: 'Hai Duong', label: 'Hải Dương' },
    { value: 'Hau Giang', label: 'Hậu Giang' },
    { value: 'Hoa Binh', label: 'Hòa Bình' },
    { value: 'Hung Yen', label: 'Hưng Yên' },
    { value: 'Khanh Hoa', label: 'Khánh Hòa' },
    { value: 'Kien Giang', label: 'Kiên Giang' },
    { value: 'Kon Tum', label: 'Kon Tum' },
    { value: 'Lai Chau', label: 'Lai Châu' },
    { value: 'Lam Dong', label: 'Lâm Đồng' },
    { value: 'Lang Son', label: 'Lạng Sơn' },
    { value: 'Lao Cai', label: 'Lào Cai' },
    { value: 'Long An', label: 'Long An' },
    { value: 'Nam Dinh', label: 'Nam Định' },
    { value: 'Nghe An', label: 'Nghệ An' },
    { value: 'Ninh Binh', label: 'Ninh Bình' },
    { value: 'Ninh Thuan', label: 'Ninh Thuận' },
    { value: 'Phu Tho', label: 'Phú Thọ' },
    { value: 'Quang Binh', label: 'Quảng Bình' },
    { value: 'Quang Nam', label: 'Quảng Nam' },
    { value: 'Quang Ngai', label: 'Quảng Ngãi' },
    { value: 'Quang Ninh', label: 'Quảng Ninh' },
    { value: 'Quang Tri', label: 'Quảng Trị' },
    { value: 'Soc Trang', label: 'Sóc Trăng' },
    { value: 'Son La', label: 'Sơn La' },
    { value: 'Tay Ninh', label: 'Tây Ninh' },
    { value: 'Thai Binh', label: 'Thái Bình' },
    { value: 'Thai Nguyen', label: 'Thái Nguyên' },
    { value: 'Thanh Hoa', label: 'Thanh Hóa' },
    { value: 'Thua Thien Hue', label: 'Thừa Thiên Huế' },
    { value: 'Tien Giang', label: 'Tiền Giang' },
    { value: 'Tra Vinh', label: 'Trà Vinh' },
    { value: 'Tuyen Quang', label: 'Tuyên Quang' },
    { value: 'Vinh Long', label: 'Vĩnh Long' },
    { value: 'Vinh Phuc', label: 'Vĩnh Phúc' },
    { value: 'Yen Bai', label: 'Yên Bái' }
    ];

  return (
    <MDBContainer id="content-container">
      <MDBRow id="content-row" className="flex-row-reverse">
        <MDBCol className="side-panel d-flex justify-content-center align-items-start" lg="3" md="4">
          <MDBContainer>
            <MDBRow className="justify-content-center my-3">
              <MDBInputGroup className="justify-content-center my-3">
                <Select id="search-section"
                  options={provinceOptions}
                  value={provinceOptions.find(option => option.value === selectedProvince)}
                  onChange={handleProvinceChange}
                  placeholder="Select Province"
                />

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
