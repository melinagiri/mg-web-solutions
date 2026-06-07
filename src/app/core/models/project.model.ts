export interface ProjectSlide {
  key: string;
  name: string;
  sub: string;
  desc: string;
  tags: string[];
  screen: string;
}

export interface ModalRoleItem {
  label: string;
  val: string;
}

export interface ProjectDetail {
  tag: string;
  title: string;
  role_items: ModalRoleItem[];
  overview: string;
  tech: string[];
  role: string;
  challenges: string;
  outcomes: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  service: string;
  message: string;
}

export interface WhyItem {
  title: string;
  desc:  string;
}