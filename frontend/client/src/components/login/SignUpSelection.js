import React from 'react'

function SignUpSelection(data) {
    return (
        <div className="account">
            <div className="account__form">
                <form onSubmit={data.onSubmit}>
                    <div className="box">
                        <div className="account__head">
                        <h2>추가정보 등록</h2>
                        </div>
                        <div className="account__field">
                            <label htmlFor="username" className="hidden">생일추가</label>
                            <div className="form__input">
                                <select name="user_birth_year" id="birthyear" onChange={data.onChangeYear} value="2000">
                                    <option value="1900" >1900</option>
                                    <option value="1901" >1901</option>
                                    <option value="1902" >1902</option>
                                    <option value="1903" >1903</option>
                                    <option value="1904" >1904</option>
                                    <option value="1905" >1905</option>
                                    <option value="1906" >1906</option>
                                    <option value="1907" >1907</option>
                                    <option value="1908" >1908</option>
                                    <option value="1909" >1909</option>
                                    <option value="1910" >1910</option>
                                    <option value="1911" >1911</option>
                                    <option value="1912" >1912</option>
                                    <option value="1913" >1913</option>
                                    <option value="1914" >1914</option>
                                    <option value="1915" >1915</option>
                                    <option value="1916" >1916</option>
                                    <option value="1917" >1917</option>
                                    <option value="1918" >1918</option>
                                    <option value="1919" >1919</option>
                                    <option value="1920" >1920</option>
                                    <option value="1921" >1921</option>
                                    <option value="1922" >1922</option>
                                    <option value="1923" >1923</option>
                                    <option value="1924" >1924</option>
                                    <option value="1925" >1925</option>
                                    <option value="1926" >1926</option>
                                    <option value="1927" >1927</option>
                                    <option value="1928" >1928</option>
                                    <option value="1929" >1929</option>
                                    <option value="1930" >1930</option>
                                    <option value="1931" >1931</option>
                                    <option value="1932" >1932</option>
                                    <option value="1933" >1933</option>
                                    <option value="1934" >1934</option>
                                    <option value="1935" >1935</option>
                                    <option value="1936" >1936</option>
                                    <option value="1937" >1937</option>
                                    <option value="1938" >1938</option>
                                    <option value="1939" >1939</option>
                                    <option value="1941" >1941</option>
                                    <option value="1942" >1942</option>
                                    <option value="1943" >1943</option>
                                    <option value="1944" >1944</option>
                                    <option value="1945" >1945</option>
                                    <option value="1946" >1946</option>
                                    <option value="1947" >1947</option>
                                    <option value="1948" >1948</option>
                                    <option value="1949" >1949</option>
                                    <option value="1940" >1940</option>
                                    <option value="1940" >1940</option>
                                    <option value="1951" >1951</option>
                                    <option value="1952" >1952</option>
                                    <option value="1953" >1953</option>
                                    <option value="1954" >1954</option>
                                    <option value="1955" >1955</option>
                                    <option value="1956" >1956</option>
                                    <option value="1957" >1957</option>
                                    <option value="1958" >1958</option>
                                    <option value="1959" >1959</option>
                                    <option value="1960" >1960</option>
                                    <option value="1961" >1961</option>
                                    <option value="1962" >1962</option>
                                    <option value="1963" >1963</option>
                                    <option value="1964" >1964</option>
                                    <option value="1965" >1965</option>
                                    <option value="1966" >1966</option>
                                    <option value="1967" >1967</option>
                                    <option value="1968" >1968</option>
                                    <option value="1969" >1969</option>
                                    <option value="1970" >1970</option>
                                    <option value="1971" >1971</option>
                                    <option value="1972" >1972</option>
                                    <option value="1973" >1973</option>
                                    <option value="1974" >1974</option>
                                    <option value="1975" >1975</option>
                                    <option value="1976" >1976</option>
                                    <option value="1977" >1977</option>
                                    <option value="1978" >1978</option>
                                    <option value="1979" >1979</option>
                                    <option value="1980" >1980</option>
                                    <option value="1981" >1981</option>
                                    <option value="1982" >1982</option>
                                    <option value="1983" >1983</option>
                                    <option value="1984" >1984</option>
                                    <option value="1985" >1985</option>
                                    <option value="1986" >1986</option>
                                    <option value="1987" >1987</option>
                                    <option value="1988" >1988</option>
                                    <option value="1989" >1989</option>
                                    <option value="1990" >1990</option>
                                    <option value="1991" >1991</option>
                                    <option value="1992" >1992</option>
                                    <option value="1993" >1993</option>
                                    <option value="1994" >1994</option>
                                    <option value="1995" >1995</option>
                                    <option value="1996" >1996</option>
                                    <option value="1997" >1997</option>
                                    <option value="1998" >1998</option>
                                    <option value="1999" >1999</option>
                                    <option value="2000" >2000</option>
                                    <option value="2001" >2001</option>
                                    <option value="2002" >2002</option>
                                    <option value="2003" >2003</option>
                                    <option value="2005" >2005</option>
                                    <option value="2006" >2006</option>
                                    <option value="2007" >2007</option>
                                    <option value="2008" >2008</option>
                                    <option value="2009" >2009</option>
                                    <option value="2010" >2010</option>
                                    <option value="2011" >2011</option>
                                    <option value="2012" >2012</option>
                                    <option value="2013" >2013</option>
                                    <option value="2014" >2014</option>
                                    <option value="2015" >2015</option>
                                    <option value="2016" >2016</option>
                                    <option value="2017" >2017</option>
                                    <option value="2018" >2018</option>
                                    <option value="2019" >2019</option>
                                    <option value="2020" >2020</option>
                                    <option value="2021" >2021</option>
                                </select>
                                <select name="user_birth_month" id="birthmonth" onChange={data.onChangeMonth}>
                                    <option value="01" defaultValue>1월</option>
                                    <option value="02">2월</option>
                                    <option value="03">3월</option>
                                    <option value="04">4월</option>
                                    <option value="05">5월</option>
                                    <option value="06">6월</option>
                                    <option value="07">7월</option>
                                    <option value="08">8월</option>
                                    <option value="09">9월</option>
                                    <option value="10">10월</option>
                                    <option value="11">11월</option>
                                    <option value="12">12월</option>
                                </select>
                                <select name="user_birth_day" id="birthday" onChange={data.onChangeDay}>
                                    <option value="01" defaultValue>1일</option>
                                    <option value="02">2일</option>
                                    <option value="03">3일</option>
                                    <option value="04">4일</option>
                                    <option value="05">5일</option>
                                    <option value="06">6일</option>
                                    <option value="07">7일</option>
                                    <option value="08">8일</option>
                                    <option value="09">9일</option>
                                    <option value="10">10일</option>
                                    <option value="11">11일</option>
                                    <option value="12">12일</option>
                                    <option value="13">13일</option>
                                    <option value="14">14일</option>
                                    <option value="15">15일</option>
                                    <option value="16">16일</option>
                                    <option value="17">17일</option>
                                    <option value="18">18일</option>
                                    <option value="19">19일</option>
                                    <option value="20">20일</option>
                                    <option value="21">21일</option>
                                    <option value="22">22일</option>
                                    <option value="23">23일</option>
                                    <option value="24">24일</option>
                                    <option value="25">25일</option>
                                    <option value="26">26일</option>
                                    <option value="27">27일</option>
                                    <option value="28">28일</option>
                                    <option value="29">29일</option>
                                    <option value="30">30일</option>
                                    <option value="31">31일</option>
                                </select>
                            </div>
                        </div>
                        <div className="account__field">
                    <div className="form__text">
                        <label htmlFor="username" className="hidden">태어난 날짜를 입력해주세요.</label>
                    </div>
                </div>
                <div className="account__button">
                    <button
                    type="submit"
                    className="btn btn__block btn__gradient--primary"
                    >
                    <strong>제출하기</strong>
                    </button>
                </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpSelection
