/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from 'react';
import { Button, message, Upload } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/configStore';
import moment from 'moment';
import { Field, Form, Formik } from 'formik';
import { HopDongKhaiThacRedux } from '../../../../redux/hopDongReducer/hopDongReducer';
import { useNavigate } from 'react-router-dom';
import { schema } from './ThemHopDongKhaiThacMoi';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../FireStore/fireStore';

export const get_day_of_time = (d1: Date, d2: Date) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
};

export default function ChinhSuaHopDongKhaiThac() {
    const navigate = useNavigate();
    const [isType, setIsType] = useState<boolean>(true); // để handle type password => type text
    const item = useSelector(
        (state: RootState) => state.hopDong.itemHopDongKhaiThac
    );
    const [quocTich, setQuocTich] = useState<string>(
        item?.quocTich ? item.quocTich : ''
    );
    const [toggleLoaiHopDong, setToggleLoaiHopDong] = useState<boolean>(
        item?.loaiHopDong.tronGoi.giaTriHopDong === 0 ? false : true
    );

    const [giaTriHopDong, setGiaTriHopDong] = useState<string>(
        `${item?.loaiHopDong.tronGoi.giaTriHopDong}`
    );
    const [giaTriLuotPhat, setGiaTriLuotPhat] = useState<string>(
        `${item?.loaiHopDong.luotPhat.giaTriLuotPhat}`
    );
    console.log({ item });
    let initialValue: HopDongKhaiThacRedux = {
        id: '',
        hieuLucHopDong: '',
        ngayTao: '',
        tenHopDong: '',
        soHopDong: '',
        ngayHieuLuc: '',
        ngayHetHan: '',
        tenDonViSuDung: '',
        nguoiDaiDien: '',
        chucVu: '',
        ngaySinh: '',
        quocTich: quocTich,
        soDienThoai: '',
        email: '',
        gioiTinh: '',
        cmnd: '',
        ngayCap: '',
        noiCap: '',
        maSoThue: '',
        noiCuTru: '',
        loaiHopDong: {
            tronGoi: { giaTriHopDong: 0, giaTriPhanPhoi: 0 },
            luotPhat: { giaTriLuotPhat: 0 },
        },
        tenDangNhap: '',
        matKhau: '',
        soTaiKhoan: '',
        nganHang: '',
    };

    if (item) {
        initialValue = {
            chucVu: item.chucVu,
            cmnd: item.cmnd,
            email: item.email,
            tenDangNhap: item.tenDangNhap,
            gioiTinh: item.gioiTinh,
            hieuLucHopDong: item.hieuLucHopDong,
            id: item.id,
            loaiHopDong: {
                tronGoi: {
                    giaTriHopDong: parseInt(giaTriHopDong),
                    giaTriPhanPhoi: 0,
                },
                luotPhat: {
                    giaTriLuotPhat: parseInt(giaTriLuotPhat),
                },
            },
            maSoThue: item.maSoThue,
            matKhau: item.matKhau,
            nganHang: item.nganHang,
            ngayCap: item.ngayCap,
            ngayHetHan: item.ngayHetHan,
            ngayHieuLuc: item.ngayHieuLuc,
            ngaySinh: item.ngaySinh,
            ngayTao: item.ngayTao,
            nguoiDaiDien: item.nguoiDaiDien,
            noiCap: item.noiCap,
            noiCuTru: item.noiCuTru,
            quocTich: quocTich,
            soDienThoai: item.soDienThoai,
            soHopDong: item.soHopDong,
            soTaiKhoan: item.soTaiKhoan,
            tenDonViSuDung: item.tenDonViSuDung,
            tenHopDong: item.tenHopDong,
        };
        console.log({ initialValue });
    }
    useEffect(() => {
        if (item === null) {
            navigate('/admin/quanLyHopDong');
        }
    });

    const handleGiaTriPhanPhoi = (
        giaTriHopDong: string,
        d1: string,
        d2: string
    ) => {
        if (item) {
            const ngayHieuLuc = new Date(d1);
            const ngayHetHan = new Date(d2);
            const totileDay = get_day_of_time(ngayHieuLuc, ngayHetHan);
            return (parseInt(giaTriHopDong) / totileDay).toFixed(3);
        }
        return 0;
    };

    return (
        <div className="chinhSuaHopDongKhaiThac">
            <div className="container">
                <div className="container-top">
                    <p>
                        Quản lý<i className="fas fa-chevron-right"></i>Quản lý
                        hợp đồng
                        <i className="fas fa-chevron-right"></i>Chi tiết
                        <i className="fas fa-chevron-right"></i>Chỉnh sửa hợp
                        đồng
                    </p>
                    <h1>Hợp đồng khai thác - {item?.soHopDong} </h1>
                </div>
                <Formik
                    initialValues={initialValue}
                    validationSchema={schema}
                    onSubmit={async (value) => {
                        value.quocTich = quocTich;
                        console.log({ quocTich });
                        value.loaiHopDong.luotPhat.giaTriLuotPhat =
                            parseInt(giaTriLuotPhat);
                        value.loaiHopDong.tronGoi.giaTriHopDong =
                            parseInt(giaTriHopDong);
                        console.log({ value });
                        // update data len fireStore thông qua setDoc() để ghi đề toàn
                        try {
                            if (item) {
                                await setDoc(
                                    doc(db, 'hopDong', item.id),
                                    value
                                );
                                message.open({
                                    type: 'success',
                                    content: 'Cập nhật thành công!!',
                                    duration: 0.8,
                                });
                                navigate('/admin/quanLyHopDong');
                            }
                        } catch (e) {
                            console.log(e);
                        }
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="container-center">
                                <div className="center-list">
                                    <div className="center-item">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="tenHopDong">
                                                            Tên hợp đồng:{' '}
                                                            <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="tenHopDong"
                                                            id="tenHopDong"
                                                            className={
                                                                errors.tenHopDong &&
                                                                touched.tenHopDong
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="soHopDong">
                                                            Số hợp đồng:{' '}
                                                            <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="soHopDong"
                                                            id="soHopDong"
                                                            className={
                                                                errors.soHopDong &&
                                                                touched.soHopDong
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="ngayHieuLuc">
                                                            Ngày hiệu lực:{' '}
                                                            <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="date"
                                                            name="ngayHieuLuc"
                                                            id="ngayHieuLuc"
                                                            className={
                                                                errors.ngayHieuLuc &&
                                                                touched.ngayHieuLuc
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="ngayHetHan">
                                                            Ngày hết hạn:{' '}
                                                            <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="date"
                                                            name="ngayHetHan"
                                                            id="ngayHetHan"
                                                            className={
                                                                errors.ngayHetHan &&
                                                                touched.ngayHetHan
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="center-item">
                                        <label htmlFor="">Đính kèm tệp:</label>
                                        <div className="upload-file">
                                            <Upload>
                                                <Button id="input_file">
                                                    <i className="fas fa-cloud-upload-alt"></i>{' '}
                                                    Tải lên
                                                </Button>
                                            </Upload>
                                            <p>
                                                <i className="fas fa-file-word"></i>
                                                hetthuongcannho.doc
                                                <i className="fas fa-times"></i>
                                            </p>
                                            <p>
                                                <i className="fas fa-file-word"></i>
                                                hetthuongcannho.doc
                                                <i className="fas fa-times"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="center-item">
                                        <h5>Loại hợp đồng:</h5>
                                        <div className="checked-item">
                                            <div className="form-group">
                                                <div className="wrap-form">
                                                    <input
                                                        type="radio"
                                                        name="loaiHopDong"
                                                        id="tronGoi"
                                                        checked={
                                                            toggleLoaiHopDong
                                                        }
                                                        onChange={() => {
                                                            setToggleLoaiHopDong(
                                                                true
                                                            );
                                                            setGiaTriLuotPhat(
                                                                '0'
                                                            );
                                                        }}
                                                    />
                                                    <label htmlFor="tronGoi">
                                                        Trọn gói
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="wrap-checked-right">
                                                <div className="form-group">
                                                    <label htmlFor="giaTriHopDong">
                                                        Giá trị hợp đồng
                                                        <br />
                                                        (VNĐ)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="giaTriHopDong"
                                                        name="tronGoi"
                                                        value={giaTriHopDong}
                                                        onChange={(e) =>
                                                            setGiaTriHopDong(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="giaTriPhanPhoi">
                                                        Giá trị phân phối
                                                        <br />
                                                        (VNĐ/ngày)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="giaTriPhanPhoi"
                                                        readOnly
                                                        value={handleGiaTriPhanPhoi(
                                                            giaTriHopDong,
                                                            `${item?.ngayHieuLuc}`,
                                                            `${item?.ngayHetHan}`
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checked-item">
                                            <div className="form-group">
                                                <div className="wrap-form">
                                                    <input
                                                        type="radio"
                                                        name="loaiHopDong"
                                                        id="luotPhat"
                                                        checked={
                                                            !toggleLoaiHopDong
                                                        }
                                                        onChange={() => {
                                                            setToggleLoaiHopDong(
                                                                false
                                                            );
                                                            setGiaTriHopDong(
                                                                '0'
                                                            );
                                                        }}
                                                    />
                                                    <label htmlFor="luotPhat">
                                                        Lượt phát
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="wrap-checked-right">
                                                <div className="form-group">
                                                    <label htmlFor="giaTriLuotPhat">
                                                        Giá trị lượt phát
                                                        <br />
                                                        (VNĐ)/lượt
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="giaTriLuotPhat"
                                                        value={giaTriLuotPhat}
                                                        onChange={(e) =>
                                                            setGiaTriLuotPhat(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-list">
                                    <div className="center-item">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="tenDonViSuDung">
                                                            Tên đơn vị sử dụng:{' '}
                                                            <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="tenDonViSuDung"
                                                            id="tenDonViSuDung"
                                                            className={
                                                                errors.tenDonViSuDung &&
                                                                touched.tenDonViSuDung
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="nguoiDaiDien">
                                                            Người đại diện:{' '}
                                                            <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="nguoiDaiDien"
                                                            id="nguoiDaiDien"
                                                            className={
                                                                errors.nguoiDaiDien &&
                                                                touched.nguoiDaiDien
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="chucVu">
                                                            Chức vụ: <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="chucVu"
                                                            id="chucVu"
                                                            className={
                                                                errors.chucVu &&
                                                                touched.tenHopDong
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="ngaySinh">
                                                            Ngày sinh: <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="date"
                                                            name="ngaySinh"
                                                            id="ngaySinh"
                                                            className={
                                                                errors.ngaySinh &&
                                                                touched.tenHopDong
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="quocTich">
                                                            Quốc tịch: <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <select
                                                            name="quocTich"
                                                            id="quocTich"
                                                            value={quocTich}
                                                            onChange={(e) =>
                                                                setQuocTich(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        >
                                                            <option value="">
                                                                Other
                                                            </option>
                                                            <option value="VN">
                                                                Việt Nam
                                                            </option>
                                                            <option value="NY">
                                                                New York
                                                            </option>
                                                            <option value="SF">
                                                                San Francisco
                                                            </option>
                                                            <option value="CH">
                                                                Chicago
                                                            </option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="soDienThoai">
                                                            Số điện thoại:
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="soDienThoai"
                                                            id="soDienThoai"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="email">
                                                            Email: <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="email"
                                                            id="email"
                                                            className={
                                                                errors.email &&
                                                                touched.email
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="center-item">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="gioiTinh">
                                                            Giới tính: <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <div className="form-group">
                                                            <Field
                                                                type="radio"
                                                                name="gioiTinh"
                                                                id="nam"
                                                                value="Nam"
                                                            />
                                                            <label htmlFor="nam">
                                                                Nam
                                                            </label>
                                                        </div>
                                                        <div className="form-group">
                                                            <Field
                                                                type="radio"
                                                                name="gioiTinh"
                                                                id="nu"
                                                                value="Nữ"
                                                            />
                                                            <label htmlFor="nu">
                                                                Nữ
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="CMND">
                                                            CMND/ CCCD: <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="cmnd"
                                                            id="CMND"
                                                            className={
                                                                errors.cmnd &&
                                                                touched.cmnd
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="ngayCap">
                                                            Ngày cấp: <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="date"
                                                            name="ngayCap"
                                                            id="ngayCap"
                                                            className={
                                                                errors.ngayCap &&
                                                                touched.ngayCap
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="noiCap">
                                                            Nơi cấp: <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="noiCap"
                                                            id="noiCap"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="maSoThue">
                                                            Mã số thuế:
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="maSoThue"
                                                            id="maSoThue"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="noiCuTru">
                                                            Nơi cư trú:
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="textarea"
                                                            name="noiCuTru"
                                                            id="noiCuTru"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="center-item">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="tenDangNhap">
                                                            Tên đăng nhập:{' '}
                                                            <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            id="tenDangNhap"
                                                            name="tenDangNhap"
                                                            className={
                                                                errors.tenDangNhap &&
                                                                touched.tenDangNhap
                                                                    ? 'input_error'
                                                                    : ''
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="matKhau">
                                                            Mật khẩu: <i>*</i>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <div className="password">
                                                            <Field
                                                                type={
                                                                    isType
                                                                        ? 'password'
                                                                        : 'test'
                                                                }
                                                                name="matKhau"
                                                                id="matKhau"
                                                                className={
                                                                    errors.matKhau &&
                                                                    touched.matKhau
                                                                        ? 'input_error'
                                                                        : ''
                                                                }
                                                            />
                                                            <i
                                                                onClick={() => {
                                                                    setIsType(
                                                                        isType
                                                                            ? false
                                                                            : true
                                                                    );
                                                                }}
                                                                id={
                                                                    isType
                                                                        ? ''
                                                                        : 'doiMau'
                                                                }
                                                                className="fa fa-eye"
                                                            ></i>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="soTaiKhoan">
                                                            Số tài khoản:
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="soTaiKhoan"
                                                            id="soTaiKhoan"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="nganHang">
                                                            Ngân hàng:
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <Field
                                                            type="text"
                                                            name="nganHang"
                                                            id="nganHang"
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="container-btn">
                                <p>
                                    <i>*</i>là những trường thông tin bắt buộc
                                </p>
                                <div className="content-btn">
                                    <button type="button">Hủy</button>
                                    <button type="submit">Lưu</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
