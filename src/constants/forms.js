import CITIES from "./cities";
import POSITIONS from "./positions";

import InputText from "@/components/shared/InputText/InputText.vue";
import DatePicker from "@/components/shared/DatePicker/DatePicker.vue";
import DropDown from "@/components/shared/DropDown/DropDown.vue";
import SearchOption from "@/components/shared/SearchOption/SearchOption.vue";
import TextArea from "@/components/shared/TextArea/TextArea.vue";
import DropArea from "@/components/shared/DropZone/DropArea.vue";
import InputMoney from "@/components/shared/InputMoney/InputMoney.vue";
import DeleteableDropDown from "@/components/shared/DeleteableDropDown/DeleteableDropDown.vue";
import DateFromTo from '@/components/shared/DateFormTo/DateFromTo.vue'

const FORMS = [
  {
    step: 1,
    inputs: [
      {
        id: "txtName",
        label: "Họ và Tên",
        is_required: true,
        input_component: InputText,
      },
      {
        id: "dateDateOfBirth",
        label: "Ngày sinh",
        is_required: true,
        input_component: DatePicker,
      },
      {
        id: "selectCity",
        label: "Thành Phố",
        input_component: DropDown,
        options: CITIES,
      },
      {
        id: "searchPosition",
        label: "Vị trí làm việc",
        hint: "Có thể chọn nhiều vị trí mà bạn muốn làm việc",
        placeholder: "Chọn các vị trí mà bạn muốn",
        input_component: SearchOption,
        search_options: POSITIONS,
      },
      {
        id: "areaSelfDesc",
        label: "Mô tả về bản thân",
        input_component: TextArea,
        max_length: 50,
      },
      {
        id: "picture",
        label: "Ảnh cá nhân",
        input_component: DropArea,
        validation: [
          {
            validateId: "picture_type",
            validator: (file) => {
              return file.type === "image/jpeg" || file.type === "image/png";
            },
            errorMessage: "Ảnh cá nhân phải ở định dịnh png/jpg",
          },
          {
            validateId: "picture_size",
            validator: (file) => {
              return file.size <= 25 * 1024;
            },
            errorMessage: "Kích thước ảnh không được quá 25kB",
          },
        ],
      },
    ],
    isMultiple: false,
  },
  {
    step: 2,
    inputs: [
      {
        id: "experience",
        input_component: DeleteableDropDown,
      },
      {
        id: 'txtWorkedPosition',
        is_required: true,
        label: 'Vị trí từng làm',
        input_component: InputText,
      },
      {
        id: 'dateFromTo',
        is_required: true,
        label: 'Thời gian làm việc',
        input_component: DateFromTo,
      },
      {
        id: 'areaJobDesc',
        is_required: false,
        label: 'Mô tả về công việc',
        input_component: TextArea,
      }
    ],
    isMultiple: true,
  },
  {
    step: 3,
    inputs: [
      {
        id: "areaReason",
        is_required: true,
        label: "Lí do muốn ứng tuyển vào công ty",
        input_component: TextArea,
        max_length: 1000,
      },
      {
        id: "moneyWanted",
        is_required: true,
        label: 'Mức lương mong muốn',
        input_component: InputMoney,
      },
    ],
    isMultiple: false,
  },
];

export default FORMS;
