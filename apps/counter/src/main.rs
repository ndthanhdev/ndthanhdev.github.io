use iced::widget::{button, column, row, text, Column, Row};
use iced::Center;

pub fn main() -> iced::Result {
    iced::run("A cool counter", Counter::update, Counter::view)
}

#[derive(Default)]
struct Counter {
    value: i64,
}

#[derive(Debug, Clone, Copy)]
enum Message {
    Increment,
    Decrement,
}

impl Counter {
    fn update(&mut self, message: Message) {
        match message {
            Message::Increment => {
                self.value += 1;
            }
            Message::Decrement => {
                self.value -= 1;
            }
        }
    }

    fn view(&self) -> Column<Message> {
        // row![column![
        //     button("Increment").on_press(Message::Increment),
        //     text(self.value).size(50),
        //     button("Decrement")
        //         .on_press(Message::Decrement)
        // ]
        // .padding(20)
        // .align_x(Center)]
        // .align_y(Center)

        column![row![
            button("Decrement").on_press(Message::Decrement),
            text(self.value).size(50),
            button("Increment").on_press(Message::Increment)
        ]
        .spacing(20)
        .height(iced::Length::Fill)
        .padding(20)
        .align_y(Center)]
        .align_x(Center)
        .width(iced::Length::Fill)
        // .height(iced::Length::Fill)
    }
}
