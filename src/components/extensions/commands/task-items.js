import Typography from '@mui/material/Typography'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import ImageIcon from '@mui/icons-material/Image'

const getSuggestionTaskItems = (query) => {
  return [
    {
      title: "Текст",
      icon: <TextFieldsIcon />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setParagraph().run();
      }
    },
    {
      title: "Заголовок 1",
      icon: <Typography fontWeight="bold">H1</Typography>,
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 1 })
          .run();
      }
    },
    {
      title: "Заголовок 2",
      icon: <Typography fontWeight="bold" >H2</Typography>,
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 2 })
          .run();
      }
    },
    {
      title: "Картинка",
      icon: <ImageIcon />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setImageResizeWrapper().run()
      }
    },
    {
      title: "Ненумерований список",
      icon: <FormatListBulletedIcon />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run();
      }
    },
    {
      title: "Нумерований список",
      icon: <FormatListNumberedIcon />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleOrderedList().run();
      }
    },
    {
      title: "Цитата",
      icon: <FormatQuoteIcon />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).toggleBlockquote().run();
      }
    },
    {
      title: "Горизонтальна лінія",
      icon: <HorizontalRuleIcon />,
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setHorizontalRule().run();
        editor.chain().focus().setParagraph().run();
      }
    },
  ]
    .filter((item) => item.title.toLowerCase().startsWith(query.query.toLowerCase()))
    .slice(0, 10);
};

export default getSuggestionTaskItems;
