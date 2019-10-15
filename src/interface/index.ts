export type Extension = '.png' | '.jpg' | '.jpeg' | '.mp3' | '.mp4';

export interface IApiAssets {
    code: number;
    data: {
      assets: IAssets[];
      tags_stat: string[];
    };
    success: boolean;
  }

export interface IAssets {
    display_name: string;
    file_extension: Extension;
    file_path: string;
    id: string;
    [props: string]: any;
}
