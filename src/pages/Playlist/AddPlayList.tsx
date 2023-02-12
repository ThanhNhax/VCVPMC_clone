import { Switch } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function AddPlayList({}: Props) {
  const navigate = useNavigate();
  const props: UploadProps = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement("img");
          img.src = reader.result as string;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.font = "33px Arial";
            ctx.fillText("Ant Design", 20, 20);
            canvas.toBlob((result) => resolve(result as any));
          };
        };
      });
    },
  };

  // xử lý toogle
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  //   const renderBanGhiTable = () => {
  //     return itemPlayList?.arrBanGhi?.map(
  //       (banGhi: KhoBanGhiRedux, index: number) => {
  //         return (
  //           <tr key={index}>
  //             <td>{index + 1}</td>
  //             <td>
  //               <div className="td-tenBanGhi">
  //                 <p>{banGhi.tenBanGhi}</p>
  //                 <div
  //                   className="td-bottom"
  //                   style={{
  //                     display: "flex",
  //                     gap: "5px",
  //                     alignItems: "center",
  //                   }}
  //                 >
  //                   <p>{banGhi.theLoai}</p>
  //                   <i className="fas fa-circle" style={styleI}></i>
  //                   <p>{banGhi.dinhDang}</p>
  //                   <i className="fas fa-circle" style={styleI}></i>
  //                   <p>{banGhi.thoiLuong}</p>
  //                 </div>
  //               </div>
  //             </td>
  //             <td>{banGhi.caSi}</td>
  //             <td>{banGhi.tacGia}</td>
  //             <td className="action" onClick={showModal}>
  //               Nghe
  //             </td>
  //             <td
  //               className="action"
  //               onClick={() => {
  //                 const indexDelete = itemPlayList.arrBanGhi.findIndex(
  //                   (item) => item.id === banGhi.id
  //                 );
  //                 dispatch(deleteArrBanGhiRedux(indexDelete));
  //               }}
  //             >
  //               Gỡ
  //             </td>
  //           </tr>
  //         );
  //       }
  //     );
  //   };
  return (
    <div className="addPlaylist">
      <div className="container">
        <div className="content-top">
          <p>
            Playlist <i className="fas fa-chevron-right"></i>Thêm playlist mới
          </p>
          <h1>Thêm Playlist</h1>
        </div>
        <div className="center">
          <div className="content-center">
            <div className="center-left">
              <div className="left-item title-item">
                <p>Ảnh bài:</p>
                <Upload {...props}>
                  <Button id="input_file">
                    <i className="fas fa-cloud-upload-alt"></i> Tải lên
                  </Button>
                </Upload>
              </div>
              <div className="left-item title-item">
                <p>Tiêu đề: </p>
                <input type="text" />
              </div>
              <div className="left-item title-item " id="item-list">
                <div className="item">
                  <p>Tổng số </p>
                  <p className="text-right">bản ghi</p>
                </div>
                <div className="item">
                  <p>Tổng thời lượng</p>
                  <p className="text-right">--:--:--</p>
                </div>
              </div>
              <div className="left-item title-item">
                <p>Mô tả:</p>
                <textarea></textarea>
              </div>
              <div className="left-item title-item">
                <p>Chủ đề:</p>
                <textarea></textarea>
              </div>
              <div className="title-bottom title-item">
                <div className="bottom-item">
                  <Switch defaultChecked onChange={onChange} />
                  <p>Hiển thị ở chế độ công khai</p>
                </div>
              </div>
            </div>
            <div className="center-right">
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên bản ghi</th>
                    <th>Ca sĩ</th>
                    <th>Tác giả</th>
                  </tr>
                </thead>

                <tbody></tbody>

                {/* {renderBanGhiTable()} */}
              </table>
              <p id="null_data">
                Vui lòng chọn bản ghi để thêm vào Playlist <i>*</i>
              </p>
              <div className="right-button">
                <p>
                  <i>*</i> là những trường thông tin bắt buộc
                </p>
                <div className="btn-list">
                  <button
                    type="button"
                    // onClick={() => navigate("/admin/playlist/xemchitiet")}
                  >
                    Hủy
                  </button>
                  <button type="submit">Lưu</button>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="menu-list">
              <div className="menu-item">
                <div
                  className="bg-icon"
                  onClick={() => {
                    navigate("/admin/addbanghiplaylist");
                    console.log("/admin/addbanghiplaylist");
                  }}
                >
                  <i className="fas fa-plus"></i>
                </div>
                <p>Thêm bản ghi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
