export enum PageLayoutEnum {
	None = "none",
	Post = "post",
	CV = "cv",
}

export interface PageContext {
	layout: PageLayoutEnum;
}
