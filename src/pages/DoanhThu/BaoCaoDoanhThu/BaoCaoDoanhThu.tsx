import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    ngay: "1",
    luotPhat: 500,
  },
  {
    ngay: "2",
    luotPhat: 1000,
  },
  {
    ngay: "3",
    luotPhat: 1500,
  },
  {
    ngay: "4",
    luotPhat: 1800,
  },
  {
    ngay: "5",
    luotPhat: 2000,
  },
  {
    ngay: "6",
    luotPhat: 2000,
  },
  {
    ngay: "7",
    luotPhat: 1800,
  },
  {
    ngay: "8",
    luotPhat: 1200,
  },
  {
    ngay: "9",
    luotPhat: 1000,
  },
  {
    ngay: "10",
    luotPhat: 1000,
  },
  {
    ngay: "11",
    luotPhat: 2000,
  },
  {
    ngay: "12",
    luotPhat: 2800,
  },
  {
    ngay: "13",
    luotPhat: 3000,
  },
  {
    ngay: "14",
    luotPhat: 4000,
  },
  {
    ngay: "15",
    luotPhat: 5000,
  },
  {
    ngay: "16",
    luotPhat: 4990,
  },
  {
    ngay: "17",
    luotPhat: 4999,
  },
  {
    ngay: "18",
    luotPhat: 4500,
  },
  {
    ngay: "19",
    luotPhat: 4000,
  },
  {
    ngay: "20",
    luotPhat: 4500,
  },
  {
    ngay: "21",
    luotPhat: 5300,
  },
  {
    ngay: "22",
    luotPhat: 6000,
  },
  {
    ngay: "23",
    luotPhat: 6000,
  },
  {
    ngay: "24",
    luotPhat: 4500,
  },
  {
    ngay: "25",
    luotPhat: 4000,
  },
  {
    ngay: "26",
    luotPhat: 2800,
  },
  {
    ngay: "27",
    luotPhat: 2100,
  },
  {
    ngay: "28",
    luotPhat: 3000,
  },
  {
    ngay: "29",
    luotPhat: 3000,
  },
  {
    ngay: "30",
    luotPhat: 3300,
  },
  {
    ngay: "31",
    luotPhat: 4300,
  },
];

export default function BaoCaoDoanhThu() {
  const navigate = useNavigate();
  const [isThang, setIsThang] = useState<boolean>(true);
  console.log({ isThang });
  return (
    <div className="BaoCaoDoanhThu">
      <div className="container">
        <div className="container-top">
          <p>
            Doanh thu<i className="fas fa-chevron-right"></i>Báo cáo doanh thu
          </p>
          <h1>Báo cáo doanh thu</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-top">
              <div className="form-group">
                <label
                  htmlFor=""
                  style={
                    isThang ? { display: "inline-block" } : { display: "none" }
                  }
                >
                  Theo tháng:
                </label>
                <label
                  htmlFor=""
                  style={
                    !isThang ? { display: "inline-block" } : { display: "none" }
                  }
                >
                  Theo quý:
                </label>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    console.log(e.target.value);
                    if (e.target.value === "Theo quý") {
                      setIsThang(false);
                    } else {
                      setIsThang(true);
                    }
                  }}
                >
                  <option value="Theo tháng">Theo tháng</option>
                  <option value="Theo quý">Theo quý</option>
                </select>
                <select
                  style={
                    isThang ? { display: "inline-block" } : { display: "none" }
                  }
                >
                  <option value="">Tháng 1 </option>
                  <option value="">Tháng 2 </option>
                  <option value="">Tháng 3 </option>
                  <option value="">Tháng 4 </option>
                  <option value="">Tháng 5 </option>
                  <option value="">Tháng 6 </option>
                  <option value="">Tháng 7 </option>
                  <option value="">Tháng 8 </option>
                  <option value="">Tháng 9 </option>
                  <option value="">Tháng 10 </option>
                  <option value="">Tháng 11</option>
                  <option value="">Tháng 12 </option>
                </select>
                <select
                  style={
                    !isThang ? { display: "inline-block" } : { display: "none" }
                  }
                >
                  <option value="">Quý 1</option>
                  <option value="">Quý 2</option>
                  <option value="">Quý 3</option>
                  <option value="">Quý 4</option>
                </select>
              </div>
              <div className="list">
                <div className="item">
                  <p>Tổng số bài hát</p>
                  <p>100</p>
                </div>
                <div className="item">
                  <p>Tổng số lượt phát</p>
                  <p>32.000.000</p>
                </div>
                <div className="item">
                  <p>Doanh thu trên lượt phát</p>
                  <p>1.564.745.000đ</p>
                </div>
                <div className="item">
                  <p>Doanh thu chưa phân phối</p>
                  <p>164.745.000đ</p>
                </div>
                <div className="item">
                  <p>Hành chính phí</p>
                  <p>3.253.000đ</p>
                </div>
              </div>
            </div>
            <div className="content-bottom">
              <h2>Biểu đồ theo dõi lượt phát - 29/06/2021</h2>
              <div className="wrap-bieuDo">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="ngay" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="luotPhat" stroke="#FF7506" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="menu">
            <div
              className="bg-icon"
              onClick={() => navigate("/admin/baoCaoDoanhThu/chiTiet")}
            >
              <i className="fas fa-receipt"></i>
            </div>
            <p>Báo cáo chi tiết</p>
          </div>
        </div>
      </div>
    </div>
  );
}
