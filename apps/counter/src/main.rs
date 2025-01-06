use iced::widget::{button, column, row, text, Column, Row};
use iced::Center;

pub fn main() -> iced::Result {
    #[cfg(target_arch = "wasm32")]
    {
        console_log::init().expect("Initialize logger");
        std::panic::set_hook(Box::new(console_error_panic_hook::hook));
    }

    #[cfg(not(target_arch = "wasm32"))]
    tracing_subscriber::fmt::init();

    iced::application("A cool counter", Counter::update, Counter::view)
        .centered()
        .theme(Counter::theme)
        .run()
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
        .height(iced::Length::Fill)
    }

    fn theme(&self) -> iced::Theme {
        iced::Theme::Nord
    }
}
