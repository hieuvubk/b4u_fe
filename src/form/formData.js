
const formData = () => {
    const dataRegisterForm = [
      {
        title: "",
        data: [
            {
                id: 1,
                name: "Tên trường",
                placeholder: "Tên trường",
                type: "text",
                required: true,
            },
            {
                id: 2,
                name: "Website",
                placeholder: "Website",
                type: "text",
                required: true,
            },
            {
                id: 3,
                name: "Số điện thoại",
                placeholder: "Số điện thoại",
                type: "text",
                required: true,
            },
            {
                id: 4,
                name: "Địa chỉ",
                placeholder: "Địa chỉ",
                type: "text",
                required: true,
            },
            {
                id: 5,
                name: "Email",
                placeholder: "Email",
                type: "email",
                required: true,
            },
            {
                id: 6,
                name: "Tài khoản",
                placeholder: "Tài khoản",
                type: "text",
                required: true,
            },
            {
                id: 7,
                name: "Mật khẩu",
                placeholder: "Mật khẩu",
                type: "password",
                required: true,
            },
        ]
      },
    ];
  
    const dataLoginForm = [
        {
            title: "",
            data: [
                {
                    id: 8,
                    name: "Tài khoản",
                    placeholder: "Tài khoản",
                    type: "text",
                    required: true,
                },
                {
                    id: 9,
                    name: "Mật khẩu",
                    placeholder: "Mật khẩu",
                    type: "password",
                    required: true,
                },
            ]
          },
    ];

    return {
        dataRegisterForm,
        dataLoginForm
    };
  };

  export default formData;