import axios from '../utils/axios';
/**
 * 根据ID获取课件
 * @param coursewareId
 */
export const getCoursewareById = (coursewareId: string) => axios(`/api/authoring/courseware/${coursewareId}`, {}, 'GET');
