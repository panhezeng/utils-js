/**
 * 检查上传文件时是否满足要求
 * @param file
 * @param accept 字符串，上传接收文件类型，默认不限制
 * @param size 数字，单位KB，文件使用默认限制大小，如果不限制大小则传0
 * @param width 数字，图片类型宽度限制，默认不限制
 * @param height 数字，图片类型高度限制，默认不限制
 * @return {Promise<{validation: boolean, message: string, error:number}>}
 */
export default function checkUpload(file: File, accept: string, size: number, width: number, height: number): Promise<unknown>;
