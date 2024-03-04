interface HttpServletResponse {
    status: number;
    headerNames?: Array<string | undefined>;
    trailerFields: unknown;
}
export default HttpServletResponse;
